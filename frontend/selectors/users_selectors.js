export const selectUsers = (state) => {
  let users = Object.values(state.entities.users);
  users.sort((a, b) => (a.username < b.username ? -1 : 1));
  return users;
};