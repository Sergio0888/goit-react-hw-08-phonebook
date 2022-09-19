import instance from './auth';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async newUser => {
  const { data } = await instance.post('/contacts', newUser);
  return data;
};

export const deleteContact = async id => {
  await instance.delete(`/contacts/${id}`);
  return id;
};
