import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface Category {
    id: string;
    name: string;
}

interface  Reservation {
    id: string;
    requester_id: string;
    requester_surname: string;
    created_at: Date;
}
export interface Product {
    id: string;
    name: string;
    description: string;
    date_created: Date;
    date_updated: Date;
    status: string;
    category: Category;
    reservation: Reservation;
    image: string;
}

const initialState = {
    id: null,
    name: null,
    description: null,
    date_created: null,
    date_updated: null,
    status: null,
    category: null,
    reservation: null,
    image: null,
};

export const productSlice = createSlice({
    name: 'friend_product',
    initialState,
    reducers: {
        setFriendProduct: (state, action) => {
            console.log(state, action)
            state.name = action.payload.name;
            state.id = action.payload.id;
            state.description = action.payload.description;
            state.date_created = action.payload.date_created;
            state.date_updated = action.payload.date_updated;
            state.status = action.payload.status;
            state.category = action.payload.category;
            state.reservation = action.payload.reservation;
            state.image = action.payload.image;
        }
    },
})

export const { setFriendProduct } = productSlice.actions;

export default productSlice.reducer