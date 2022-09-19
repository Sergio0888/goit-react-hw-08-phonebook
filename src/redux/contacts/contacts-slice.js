import { createSlice } from '@reduxjs/toolkit';
import { addNewContact, fetchContacts, removeContact } from './contacts-operations';

const initialState = {
  items: [],
  filter: '',
  loading: false,
  error: null,
};

const counterSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.loading = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
    [removeContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [removeContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        items: state.items.filter(({ id }) => id !== payload),
      }

    },
    [removeContact.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
    [addNewContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [addNewContact.fulfilled]: (state, { payload }) => ({
      ...state,
      loading: false,
      items: [...state.items, payload],
    }),
    [addNewContact.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
});

export const { filter } = counterSlice.actions;
export default counterSlice.reducer;
