import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, current } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: store => ({ ...store, loading: true, error: null }),
    [signup.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [signup.error]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    [login.pending]: store => ({ ...store, loading: true, error: null }),
    [login.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [login.rejected]: (store, action) => ({
      ...store,
      loading: false,
      error: action.payload,
    }),
    [logout.pending]: store => ({ ...store, loading: true, error: null }),
    [logout.fulfilled]: () => ({
      ...initialState,
    }),
    [logout.rejected]: (store, action) => ({
      ...store,
      loading: false,
      error: action.payload,
    }),
    [current.pending]: store => ({ ...store, loading: true, error: null }),
    [current.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload;
      store.isLogin = true;
    },
    [current.rejected]: (store, action) => ({
      ...store,
      loading: false,
      error: action.payload,
    }),
  },
});

export default authSlice.reducer;
