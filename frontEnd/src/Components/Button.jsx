function Button({ Icon, size, onSmash }) {
  return (
    <button
      onClick={onSmash}
      className="dark:hover:bg-gray-800 hover:bg-light-bg-secondary transition-colors duration-300 rounded-lg px-1.5 py-1.5 cursor-pointer dark:text-dark-text-primary text-light-text-primary"
    >
      <Icon size={size} />
    </button>
  );
}

export default Button;
