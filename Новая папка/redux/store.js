import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./rootReducer";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer
    }
});
