import { combineReducers } from "@reduxjs/toolkit";
import itemsReducer from "./items/items-reducer";
import filterReducer from "./filter/filter-reducer";

export const contactsReducer = combineReducers({
    contacts: itemsReducer,
    filter: filterReducer,
});

export const rootReducer = combineReducers({
    contacts: contactsReducer,
  });