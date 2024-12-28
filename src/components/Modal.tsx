import { MouseEvent, ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  onClickOutsideClose?: boolean;
};

function Modal({ onClose, children, onClickOutsideClose = false }: ModalProps) {
  const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (onClickOutsideClose && typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <div className="fixed h-full left-0 top-0 flex justify-center items-center z-40 w-full backdrop-blur-sm">
      <div
        className="fixed z-30 bg-black opacity-30 inset-0 border-4"
        onClick={handleBackgroundClick}
      ></div>
      <div className="relative z-50 flex justify-center items-center shadow-2x">
        <div className="px-4 py-2">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
