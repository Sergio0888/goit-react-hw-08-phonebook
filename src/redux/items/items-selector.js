export const fetchContacts = ({contacts}) => contacts.items;
export const getState = ({contacts}) => ({loading: contacts.loading, error: contacts.error});