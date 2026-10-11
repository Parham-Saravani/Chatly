function setLocalStorage(key, value) {
  if (!key || !value) {
    throw new TypeError("Key or Value are empty");
  }
  localStorage.setItem(key, value);
}

export default setLocalStorage;
