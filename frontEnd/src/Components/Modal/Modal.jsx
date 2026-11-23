import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function Modal({ children, onClose, isModalOpen }) {
  const [renderModal, setRenderModal] = useState(false);
  useEffect(() => {
    setRenderModal(false);
  }, [isModalOpen]);
  if (renderModal) return;
  return createPortal(
    <div
      onClick={onClose}
      onTransitionEnd={() => console.log("salam")}
      className={`${isModalOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} z-50 max-sm:px-5 absolute flex justify-center items-start pt-20 inset-0 bg-black/40 transition-opacity duration-300`}
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
