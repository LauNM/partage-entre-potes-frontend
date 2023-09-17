import {store} from "@/redux/store";

const axios = require('axios')
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {useSelector} from "react-redux";

const initialState = {
    loading: false,
    friend_product: [],
    error: ''
}

export const fetchFriendProduct = createAsyncThunk('friend/fetchProduct', () => {
    const token = store.getState().auth.userToken;
    return axios
        .get(`${process.env.NEXT_PUBLIC_HOST}/api/friend/product/`, {
            headers: {
                'Authorization': `Bearer ${ token }`,
                'Content-Type': 'application/json'
            }})
        .then(response => response.data.results)

})
export const productSlice = createSlice({
    name: 'friend_product',
    initialState,
    reducers: {
        setFriendProduct: (state, action) => {
            state.friend_product = action.payload.data;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFriendProduct.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchFriendProduct.fulfilled, (state, action) => {
            state.loading = false
            state.friend_product = action.payload
            state.error = ''
        })
        builder.addCase(fetchFriendProduct.rejected, (state, action) => {
            state.loading = false
            state.friend_roduct = []
            state.error = action.error.message
        })
    }
})

export const { setFriendProduct } = productSlice.actions;

module.exports = productSlice.reducer
module.exports.fetchFriendProduct = fetchFriendProduct