import { store } from '@/redux/store';

import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Product {
  loading: boolean;
  data: any[],
}

const initialState = {
  loading: true,
  data: null,
};

export const fetchProduct = createAsyncThunk('fetchProduct', async () => {
  const token = store.getState().auth.userToken;
  const response = await axios
    .get(`${ process.env.NEXT_PUBLIC_HOST }/api/product/`, {
      headers: {
        'Authorization': `Bearer ${ token }`,
        'Content-Type': 'application/json',
      },
    });
  return setProduct(response.data.results);

});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.payload;
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.loading = false;
      state.data = null;
    });
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;