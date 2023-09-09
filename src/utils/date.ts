export const formatDateForFilename = (date: Date) => {
  const year = date.getFullYear();
  let month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  let day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
  let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  let minute =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  let second =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  return `${year}-${month}-${day}-${hour}-${minute}-${second}`;
};
