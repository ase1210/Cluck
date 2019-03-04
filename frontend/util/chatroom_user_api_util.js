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

export const patchChatroomUser = (chatroom_user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/chatroom_users/${chatroom_user.id}`,
    dataType: 'json',
    data: {
      chatroom_user
    }
  })
);