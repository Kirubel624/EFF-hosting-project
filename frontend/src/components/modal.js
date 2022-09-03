import ReactDOM from "react-dom";

const Modal = ({ open, children }) => {
  const modal = document.getElementById("modal");

  if (!open) return null;
  return ReactDOM.createPortal(children, modal);
};

export default Modal;
