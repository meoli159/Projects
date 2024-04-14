import './style.css';

type TProps = {
  children: React.ReactNode;
  onClose: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export const Modal = ({ children, onClose }: TProps) => {
  return (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <dialog open className="modal">
        {children}
      </dialog>
    </>
  );
};
