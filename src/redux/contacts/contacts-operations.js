import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  deleteContact,
  addContact,
} from '../../api/contacts';

export const fetchContacts = createAsyncThunk(
  'user/fetchContactsStatus',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getContacts();
      return response;
    } catch (error) {
      const {data, status} = error.response;
      return rejectWithValue({data,status});
    }
  }
);

export const addNewContact = createAsyncThunk(
  'user/addContactStatus',
  async (newUser, { rejectWithValue }) => {
    try {
      const response = await addContact(newUser);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'user/removeContactStatus',
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteContact(id);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
