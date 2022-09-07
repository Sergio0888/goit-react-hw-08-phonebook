import { createReducer } from '@reduxjs/toolkit';
import { addContacts, removeContacts } from './items-action';


const initialStore = [];

const itemsReducer = createReducer(initialStore, {
    [addContacts]: (store, { payload }) => [...store, payload],
    [removeContacts]: (store, { payload }) =>
      store.filter(item => item.id !== payload),
  });
  
  export default itemsReducer;