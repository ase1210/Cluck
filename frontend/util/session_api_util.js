export const getAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: `/api/users`,
    dataType: 'json',
  })
);

export const postUser = (user) => (
  $.ajax({
    method: 'POST',
    url: `/api/users`,
    dataType: 'json',
    data: {
      user
    }
  })
);

export const postSession = (user) => (
  $.ajax({
    method: 'POST',
    url: `/api/session`,
    dataType: 'json',
    data: {
      user
    }
  })
);

export const deleteSession = () => (
  $.ajax({
    method: 'DELETE',
    url: `/api/session`,
  })
);