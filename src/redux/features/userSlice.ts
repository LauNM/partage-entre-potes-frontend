import {store} from "@/redux/store";

const axios = require('axios')
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    user: {},
    error: ''
}

export const fetchUser = createAsyncThunk('user/fetchUser', () => {
    const token = store.getState().auth.userToken;
    return axios
        .get(`${process.env.NEXT_PUBLIC_HOST}/api/profile/`, {
            headers: {
                'Authorization': `Bearer ${ token }`,
                'Content-Type': 'application/json'
            }})
        .then(response => response.data.results[0])
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser:  (state, action) => {
            state.id = action.payload.id;
            state.date_joined = action.payload.date_joined;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.email = action.payload.email;
            state.surname = action.payload.surname;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = ''
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.user = []
            state.error = action.error.message
        })
    }
})

export const { setUser } = userSlice.actions;
module.exports = userSlice.reducer
module.exports.fetchUser = fetchUser