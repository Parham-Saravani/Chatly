function setLocalStorage(key, value) {
  console.log(key);
  console.log(value);

  if (!key || !value) {
    throw new TypeError("Key or Value are empty");
  }
  localStorage.setItem(key, value);
}

export default setLocalStorage;
