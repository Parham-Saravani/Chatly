export const setCookie = (key: string, value: string, needDate = false) => {
  const date = new Date();
  console.log(date);

  date.setDate(date.getDate() + 7);
  console.log(date);

  document.cookie = `${key}=${value}; path=/; ${needDate && `expires=${date}`}`;
};
export const getCookie = (name: string) => {
  const isAvailable = document.cookie.includes(name);
  if (isAvailable) {
    return document.cookie
      .split("")
      .find((item: string) => item.startsWith(name))!
      .split("=")[1];
  } else {
    return undefined;
  }
};
