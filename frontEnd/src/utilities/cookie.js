export const setCookie = (key, value, needDate = false) => {
  const date = new Date();

  date.setDate(date.getDate() + 7);
  document.cookie = `${key}=${value}; path=/; ${needDate && `expires=${date}`}`;
};
export const getCookie = (name) => {
  const isAvailable = document.cookie.includes(name);
  if (isAvailable) {
    return document.cookie
      .split()
      .find((item) => item.startsWith(name))
      .split("=")[1];
  } else {
    return undefined;
  }
};
