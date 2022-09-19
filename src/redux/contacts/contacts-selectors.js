export const getUsers = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getfilteredUsers = state => {
  const users = getUsers(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return users.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
