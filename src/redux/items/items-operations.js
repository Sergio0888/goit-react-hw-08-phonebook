import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/items";

const isDublicate = ({name}, items) => {
    const normalizedName = name.toLowerCase();
    const result = items.find(item => {
        return (normalizedName === item.name.toLowerCase())
    });
    return Boolean(result);
}

export const getContacts = createAsyncThunk(
    "contacts/get",
    async(_, {rejectWithValue}) => {
        try {
            const data = await api.getContact();
            return data;
        } 
        catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const addContacts = createAsyncThunk(
    "contacts/add",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addContact(data);
            return result;
        } 
        catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, {getState}) => {
            const {contacts} = getState();
            if(isDublicate(data, contacts.items)) {
                alert(`${data.name} уже есть в списке контактов`);
                return false;
            }
        }
    }
);

export const deleteContacts = createAsyncThunk(
    "contacts/delete",
    async(id, {rejectWithValue}) => {
        try {
            const data = await api.deleteContact(id);
            return data;
        } 
        catch (error) {
            return rejectWithValue(error);
        }
    }
);

