import { combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./aaaa/items-reducer";
import { filterReducer } from "./filter/filter-reducer";

const rootReducer = combineReducers({
    items: contactsReducer,
    filter: filterReducer,
});

export default rootReducer;