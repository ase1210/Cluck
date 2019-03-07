const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

export const formatDate = date => {
  const obj = new Date(date);
  const month = months[obj.getMonth()];
  const day = obj.getDate();
  const suffix = [1, 21, 31].includes(day) ?
    'st' : [2, 22].includes(day) ?
    'nd' : [3, 23].includes(day) ?
    'rd' : 'th';
  const year = obj.getFullYear();
  return `${month} ${day}${suffix}, ${year}`;
};

export const formatTime = date => {
  const obj = new Date(date);
  const fullHours = obj.getHours();
  let hours = fullHours % 12;
  if (hours === 0) hours = 12;
  const minutes = obj.getMinutes();
  const tmp = `0${minutes}`;
  const paddedMinutes = tmp.slice(tmp.length - 2);
  const ampm = fullHours < 12 || fullHours === 0 ? 'AM' : 'PM';
  return `${hours}:${paddedMinutes}${ampm}`;
};

export const formatDateTime = date => {
  const obj = new Date(date);
  const today = new Date();
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const month = months[obj.getMonth()].slice(0, 3);
  const day = obj.getDate();
  const suffix = [1, 21, 31].includes(day) ?
    'st' : [2, 22].includes(day) ?
    'nd' : [3, 23].includes(day) ?
    'rd' : 'th';
  const monthDay = (today.toDateString() === obj.toDateString()) ?
    "Today at" : (yesterday.toDateString() === obj.toDateString()) ?
    "Yesterday at" : `${month} ${day}${suffix} at`;
  return `${monthDay} ${formatTime(date)}`;
};