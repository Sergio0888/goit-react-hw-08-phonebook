import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filter-actions';

const initialState = '';

const filterReducer  = createReducer(initialState, {
    [setFilter]: (_, { payload }) => payload,
});

export default filterReducer;