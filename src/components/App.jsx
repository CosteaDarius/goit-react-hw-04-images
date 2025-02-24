import { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import Modal from "./Modal";

const API_KEY = "47522593-d7c2c1229857c5e8207da38d0";
const BASE_URL = "https://pixabay.com/api/";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data } = await axios.get(BASE_URL, {
          params: {
            q: query,
            key: API_KEY,
            image_type: "photo",
            orientation: "horizontal",
            per_page: 12,
            page
          }
        });

        setImages(prev => [...prev, ...data.hits]);
      } catch (err) {
        setError("Failed to fetch images. Check API Key or try again later.");
        console.error("Error fetching images:", err.response ? err.response.data : err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setImages([]);
      setPage(1);
    }
  };

  return (
    <div className="app-container">
      <Searchbar onSubmit={handleSearch} />
      {error && <p className="error-message">{error}</p>}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button onClick={() => setPage(page + 1)} />}
      {selectedImage && <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

export default App;
