export const selectUsers = (state, str) => {
  let users = Object.values(state.entities.users).filter(user => keyInStr(user.username.toLowerCase(), str.toLowerCase()));
  users.sort((a, b) => (a.username.toLowerCase() < b.username.toLowerCase() ? -1 : 1));
  return users;
};

const keyInStr = (str, key) => {
  if (key.length === 0) return true;

  let keyVal = key[0];
  let keyIndex = str.indexOf(keyVal);

  if (keyIndex < 0) return false;
  return keyInStr(str.slice(keyIndex + 1), key.slice(1));
};