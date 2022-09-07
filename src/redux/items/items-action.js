import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContacts = createAction("contacts/add", (name, number) => {
    return {
      payload: { name, number, id: nanoid() },
    };
  }
);

export const removeContacts = createAction("contacts/remove");
