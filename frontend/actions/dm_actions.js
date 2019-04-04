export const RECEIVE_USER_SELECTION = "RECEIVE_USER_SELECTION";
export const REMOVE_USER_SELECTION = "REMOVE_USER_SELECTION";

export const receiveUserSelection = user => ({
  type: RECEIVE_USER_SELECTION,
  user
});

export const removeUserSelection = id => ({
  type: REMOVE_USER_SELECTION,
  id
});
