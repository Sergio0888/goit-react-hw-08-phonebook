import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContacts, deleteContacts } from "./items-operations";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [getContacts.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [getContacts.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = payload;
        },
        [getContacts.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [addContacts.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [addContacts.fulfilled]: (store, {payload}) => {
            store.loading = false;
            console.log(payload)
            store.items.push(payload);
        },
        [addContacts.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [deleteContacts.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [deleteContacts.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = store.items.filter(item => item.id !== payload.id);
        },
        [deleteContacts.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        }
    }
});

export default contactsSlice.reducer;