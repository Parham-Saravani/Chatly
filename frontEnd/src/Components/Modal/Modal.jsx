function Modal({ children, onClose, isModalOpen }) {
  return (
    <div
      onClick={onClose}
      className={`${isModalOpen ? "z-50 opacity-100" : "-z-10 opacity-10"} fixed flex justify-center items-center inset-0 bg-black/50 transition-opacity duration-300`}
    >
      <div className="dark:bg-dark-bg-card bg-light-bg-card w-120 px-3 py-3 rounded-xl">
        {children}
      </div>
    </div>
  );
}

export default Modal;
