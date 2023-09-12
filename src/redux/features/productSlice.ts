import {createSlice} from '@reduxjs/toolkit'

interface Category {
    id: string;
    name: string;
}


const initialState = {
    data: [],
}

export const productSlice = createSlice({
    name: 'friend_product',
    initialState,
    reducers: {
        setFriendProduct: (state, action) => {
            state.data = action.payload.data;
        }
    },
})

export const { setFriendProduct } = productSlice.actions;

export default productSlice.reducer