import * as ChatroomAPIUtil from '../util/chatroom_api_util';

export const RECEIVE_CHATROOMS = "RECEIVE_CHATROOMS";
export const RECEIVE_CHATROOM = "RECEIVE_CHATROOM";

const receiveChatrooms = (chatrooms) => ({
  type: RECEIVE_CHATROOMS,
  chatrooms
});

const receiveChatroom = (chatroom) => ({
  type: RECEIVE_CHATROOM,
  chatroom
});

export const fetchChatrooms = () => dispatch => (
  ChatroomAPIUtil.getChatrooms().then(
    chatrooms => dispatch(receiveChatrooms(chatrooms))
  )
);

// export const fetchChatroom = (id) => dispatch => (
//   ChatroomAPIUtil.getChatroom(id).then(
//     chatroom => dispatch(receiveChatroom(chatroom))
//   )
// );

export const createChatroom = (chatroom) => dispatch => (
  ChatroomAPIUtil.postChatroom(chatroom).then(
    chatroom => dispatch(receiveChatroom(chatroom))
  )
);