export const postChatroomUser = (chatroom_user) => (
  $.ajax({
    method: 'POST',
    url: `/api/chatroom_users`,
    dataType: 'json',
    data: {
      chatroom_user
    }
  })
);