/*
import {createSlice} from "@reduxjs/toolkit";

interface UserState {
    id: string,
    date_joined: Date,
    first_name: string,
    last_name: string,
    email: string,
    surname: string,
}
const initialState = {
    id: null,
    date_joined: null,
    first_name: null,
    last_name: null,
    email: null,
    surname: null,
} as UserState;

const userSlice = createSlice({
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
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;*/

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    id: null,
    date_joined: null,
    first_name: null,
    last_name: null,
    email: null,
    surname: null,
}

export const fetchUser = createAsyncThunk('user/fetch', async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/profile/`);
    return response.data;
})

const userSlice = createSlice({
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
        builder.addCase(fetchUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.value;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.user = '';
            state.error = action.error.message;
        });
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
