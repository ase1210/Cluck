export const postMessage = (message) => (
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
    url: `/api/message/${id}`,
    dataType: 'json',
  })
);