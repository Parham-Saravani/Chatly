function Button({ Icon, size }) {
  return (
    <button className="hover:bg-gray-800 transition-colors duration-300 rounded-lg px-1.5 py-1.5 cursor-pointer text-text-secondary">
      <Icon size={size} />
    </button>
  );
}

export default Button;
