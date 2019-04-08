export const selectChannels = (state, str) => {
  const currentUser = parseInt(state.session.currentUser);
  let channels = Object.values(state.entities.chatrooms).filter(
    chatroom => chatroom.channel && chatroom.name.startsWith(str.toLowerCase())
  );
  let userChatroomIds = Object.values(state.entities.chatroomUsers)
    .filter(
      chatroomUser =>
        chatroomUser.userId === currentUser &&
        ["active", "invited", "viewing"].includes(chatroomUser.status)
    )
    .map(chatroomUser => chatroomUser.chatroomId);
  let subscribed = [];
  let available = [];
  channels.forEach(channel => {
    if (userChatroomIds.includes(channel.id)) {
      subscribed.push(channel);
    } else {
      available.push(channel);
    }
  });
  subscribed.sort((a, b) => (a.name < b.name ? -1 : 1));
  available.sort((a, b) => (a.name < b.name ? -1 : 1));
  return {
    subscribed,
    available
  };
};

export const selectChatrooms = state => {
  const currentUser = parseInt(state.session.currentUser);
  let userChatroomIds = Object.values(state.entities.chatroomUsers)
    .filter(
      chatroomUser =>
        chatroomUser.userId === currentUser &&
        ["active", "invited", "viewing"].includes(chatroomUser.status)
    )
    .map(chatroomUser => chatroomUser.chatroomId);
  let chatrooms = Object.values(state.entities.chatrooms);
  let channels = [];
  let directMessages = [];
  let generalChatroomId;
  chatrooms.forEach(chatroom => {
    if (userChatroomIds.includes(chatroom.id)) {
      if (chatroom.channel) {
        if (chatroom.name === "general") {
          generalChatroomId = chatroom.id;
        }
        channels.push(chatroom);
      } else {
        directMessages.push(chatroom);
      }
    }
  });
  channels.sort((a, b) => (a.name < b.name ? -1 : 1));
  directMessages.sort((a, b) =>
    a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
  );

  return {
    channels,
    directMessages,
    generalChatroomId
  };
};

export const selectChatroomIds = state => Object.keys(state.entities.chatrooms);

export const selectUserChatroomIds = state => {
  const currentUser = parseInt(state.session.currentUser);
  let userChatroomIds = Object.values(state.entities.chatroomUsers)
    .filter(chatroomUser => chatroomUser.userId === currentUser)
    .map(chatroomUser => chatroomUser.chatroomId);
  return userChatroomIds;
};
export const selectSubscribedUserChatroomIds = state => {
  const currentUser = parseInt(state.session.currentUser);
  let userChatroomIds = Object.values(state.entities.chatroomUsers)
    .filter(
      chatroomUser =>
        chatroomUser.userId === currentUser &&
        ["active", "invited", "viewing"].includes(chatroomUser.status)
    )
    .map(chatroomUser => chatroomUser.chatroomId);
  return userChatroomIds;
};

export const getDMName = (name, nameToDelete) => {
  let names = name.split(", ");
  let idx = names.indexOf(nameToDelete);
  let newNames = names.slice(0, idx).concat(names.slice(idx + 1));
  return newNames.join(", ");
};
