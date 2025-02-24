import PropTypes from "prop-types";

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="gallery-item" onClick={() => onClick(image.largeImageURL)}>
      <img src={image.webformatURL} alt="" className="gallery-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
