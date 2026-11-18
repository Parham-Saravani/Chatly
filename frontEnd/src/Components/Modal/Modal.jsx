import { createPortal } from "react-dom";

function Modal({ children, onClose, isModalOpen }) {
  return createPortal(
    <div
      onClick={onClose}
      className={`${isModalOpen ? "z-50 opacity-100" : "-z-10 opacity-10"} max-sm:px-5 absolute flex justify-center items-start pt-20 inset-0 bg-black/40 transition-opacity duration-300`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="dark:bg-dark-bg-card bg-light-bg-card dark:backdrop-blur-2xl w-120 px-4 py-4 rounded-xl"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
