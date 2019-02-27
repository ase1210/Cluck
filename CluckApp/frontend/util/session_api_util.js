export const postUser = (user) => (
  $.ajax({
    method: "POST",
    url: `/api/users`,
    dataType: 'json',
    data: {
      user
    }
  })
);

export const postSession = (user) => (
  $.ajax({
    method: "POST",
    url: `/api/session`,
    dataType: 'json',
    data: {
      user
    }
  })
);

export const deleteSession = () => (
  $.ajax({
    method: "POST",
    url: `/api/session`,
  })
);