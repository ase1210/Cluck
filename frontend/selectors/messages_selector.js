export const selectChatroomMessages = (state, chatroomId) => {
  let chatroomMessages = Object.values(state.entities.messages).filter(message => message.chatroomId === chatroomId).reverse();
  return chatroomMessages;
};