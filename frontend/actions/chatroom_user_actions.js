import * as ChatroomUserAPIUtil from '../util/chatroom_user_api_util';

export const RECEIVE_CHATROOM_USER = "RECEIVE_CHATROOM_USER";

const receiveChatroomUser = (chatroomUser) => ({
  type: RECEIVE_CHATROOM_USER,
  chatroomUser
});

export const createChatroomUser = (chatroomUser) => dispatch => (
  ChatroomUserAPIUtil.postChatroomUser(chatroomUser).then(
    chatroomUser => dispatch(receiveChatroomUser(chatroomUser))
  )
);