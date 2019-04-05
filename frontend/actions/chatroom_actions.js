import * as ChatroomAPIUtil from "../util/chatroom_api_util";

export const RECEIVE_CHATROOMS = "RECEIVE_CHATROOMS";
export const RECEIVE_CHATROOM = "RECEIVE_CHATROOM";
export const RECEIVE_CHATROOM_ERRORS = "RECEIVE_CHATROOM_ERRORS";

const receiveChatrooms = payload => ({
  type: RECEIVE_CHATROOMS,
  payload
});

const receiveChatroom = payload => ({
  type: RECEIVE_CHATROOM,
  payload
});

const receiveChatroomErrors = errors => ({
  type: RECEIVE_CHATROOM_ERRORS,
  errors
});

export const fetchChatrooms = () => dispatch =>
  ChatroomAPIUtil.getChatrooms().then(chatrooms =>
    dispatch(receiveChatrooms(chatrooms))
  );

// export const fetchChatroom = (id) => dispatch => (
//   ChatroomAPIUtil.getChatroom(id).then(
//     chatroom => dispatch(receiveChatroom(chatroom))
//   )
// );

export const createChatroom = chatroom => dispatch =>
  ChatroomAPIUtil.postChatroom(chatroom).then(
    chatroom => dispatch(receiveChatroom(chatroom)),
    errors => dispatch(receiveChatroomErrors(errors))
  );

export const postDMChatroom = chatroom => dispatch =>
  ChatroomAPIUtil.postDMChatroom(chatroom).then(
    chatroom => dispatch(receiveChatroom(chatroom)),
    errors => dispatch(receiveChatroomErrors(errors))
  );
