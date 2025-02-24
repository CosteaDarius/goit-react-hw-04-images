import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
