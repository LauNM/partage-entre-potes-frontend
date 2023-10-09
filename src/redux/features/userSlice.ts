import {store} from "@/redux/store";

import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

interface UserState {
    loading: boolean;
    user: {
        id?: any;
        date_joined?: any;
        first_name?: string;
        last_name?: string;
        email?: string;
        surname?: string;
    },
}

const initialState = {
    loading: true,
    user: {},
}

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const token = store.getState().auth.userToken;
    const response = await axios
      .get(`${process.env.NEXT_PUBLIC_HOST}/api/profile/`, {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          }
      });
    console.log(response.data.results)
    return setUser(response.data.results[0]);
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser:  (state, action) => {
            state.user = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload.payload
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.user = {}
        })
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer