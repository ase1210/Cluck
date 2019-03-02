export const selectChannels = (state) => (
  Object.values(state.entities.chatrooms).filter(chatroom => chatroom.channel)
);