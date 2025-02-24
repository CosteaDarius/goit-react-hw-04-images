import PropTypes from "prop-types";

const Modal = ({ image, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
