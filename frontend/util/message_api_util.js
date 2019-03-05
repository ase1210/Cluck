export const postNewMessage = (message) => (
  $.ajax({
    method: 'POST',
    url: `/api/messages`,
    dataType: 'json',
    data: {
      message
    }
  })
);

export const deleteMessage = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/messages/${id}`,
    dataType: 'json',
  })
);