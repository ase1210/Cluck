export const getChatrooms = () => (
  $.ajax({
    method: 'GET',
    url: '/api/chatrooms',
    dataType: 'json',
  })
);

// export const getChatroom = (id) => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/chatrooms/${id}`,
//     dataType: 'json',
//   })
// );

export const postChatroom = (chatroom) => (
  $.ajax({
    method: 'POST',
    url: `/api/chatrooms`,
    dataType: 'json',
    data: {
      chatroom
    }
  })
);