import {store} from "@/redux/store";

import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

interface FriendProduct {
    loading: boolean;
    friend_product: any[],
}

const initialState = {
    loading: true,
    friend_product: null,
}

export const fetchFriendProduct = createAsyncThunk('fetchFriendProduct', async () => {
    const token = store.getState().auth.userToken;
    const response = await axios
        .get(`${process.env.NEXT_PUBLIC_HOST}/api/friend/product/`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    return setFriendProduct(response.data.results);

})

const friendProductSlice = createSlice({
    name: 'friend_product',
    initialState,
    reducers: {
        setFriendProduct: (state, action) => {
            state.friend_product = action.payload;
        },
        setProduct: (state, action) => {
            state.product = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFriendProduct.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchFriendProduct.fulfilled, (state, action) => {
            state.loading = false
            state.friend_product = action.payload.payload
        })
        builder.addCase(fetchFriendProduct.rejected, (state, action) => {
            state.loading = false
            state.friend_product = null
        })
    }
})

export const { setFriendProduct } = friendProductSlice.actions;

export default friendProductSlice.reducer