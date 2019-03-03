export const selectChannels = (state) => {
  const currentUser = parseInt(state.session.currentUser);
  let channels = Object.values(state.entities.chatrooms)
    .filter(chatroom => chatroom.channel);
  let userChatroomIds = Object.values(state.entities.chatroomUsers)
    .filter(chatroomUser => chatroomUser.userId === currentUser)
    .map(chatroomUser => chatroomUser.chatroomId);
  // debugger
  let subscribed = [];
  let available = [];
  channels.forEach(channel => {
    if (userChatroomIds.includes(channel.id)) {
      subscribed.push(channel);
    } else {
      available.push(channel);
    }
  });
  return {
    subscribed,
    available
  };
};

export const selectChatrooms = (state) => {
  let chatrooms = Object.values(state.entities.chatrooms);
  let channels = [];
  let directMessages = [];
  chatrooms.forEach(chatroom => {
    if (chatroom.channel) {
      channels.push(chatroom);
    } else {
      directMessages.push(chatroom);
    }
  });
  return {
    channels,
    directMessages
  };
};