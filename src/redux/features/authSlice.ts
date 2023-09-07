import { createSlice } from "@reduxjs/toolkit";


interface AuthState {
  isAuthenticated: boolean,
  isLoading: boolean,
  userToken: null,
}

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  userToken: null,
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = true;
      state.userToken = action.payload.token;
      localStorage.setItem('userToken', JSON.stringify(action.payload.token));
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.userToken = null;
      localStorage.removeItem('userToken');
    },
    finishInitialLoad: state => {
      state.isLoading = false;
    }
  }
})

export const { setAuth, logout, finishInitialLoad  } = authSlice.actions;
export default authSlice.reducer;
