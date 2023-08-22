import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogActions,
} from "@mui/material";
import axios from "axios";

const CustomPackage = ({
  open,
  onClose,
  onSelectImage,
  setImageDescription,
  onPackageChange,
  onImageSelect,
}) => {
  const [packageName, setPackageName] = useState("");
  const [backdropImages, setBackdropImages] = useState([]);
  const [previewBackdropImages, setPreviewBackdropImages] = useState([]);
  const [description, setDescription] = useState("");
  const [imageSearchQuery, setImageSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSearchImage, setSelectedSearchImage] = useState("");
  const searchButtonRef = useRef(null);
  // Function to handle image selection
  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl); // Update the selected image state

    if (selectedImages.includes(imageUrl)) {
      setSelectedImages((prevSelectedImages) =>
        prevSelectedImages.filter((image) => image !== imageUrl)
      );
      setPreviewBackdropImages((prevImages) =>
        prevImages.filter((image) => image !== imageUrl)
      ); // Remove from backdrop images
    } else {
      setSelectedImages((prevSelectedImages) => [
        ...prevSelectedImages,
        imageUrl,
      ]);

      // Add the selected image to the backdrop images if it's not already there
      if (!previewBackdropImages.includes(imageUrl)) {
        setPreviewBackdropImages((prevImages) => [...prevImages, imageUrl]);
      }
    }
  };

  useEffect(() => {
    // Reset search results when the dialog is closed
    if (!open) {
      setSearchResults([]);
      setImageSearchQuery("");
      setPreviewBackdropImages([]);
      setPackageName("");
      setDescription("");
    }
  }, [open]);

  const handleImageSearch = () => {
    if (imageSearchQuery.trim() === "") {
      return; // If the search query is empty, don't perform the search
    }

    // Perform the image search using the Unsplash API
    const unsplashAccessKey = "WlQaviorYnPKr0FerHk-KQxOdP2VxP139Hokm_up-wo"; // Replace with your Unsplash API access key
    const apiUrl = `https://api.unsplash.com/search/photos?query=${imageSearchQuery}&client_id=${unsplashAccessKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        // Extract image URLs from the response and update the search results
        const images = response.data.results.map(
          (result) => result.urls.regular
        );
        setSearchResults(images);
      })
      .catch((error) => {
        console.error("Error fetching images from Unsplash:", error);
      });
  };

  const handleImageSearchQueryChange = (e) => {
    setImageSearchQuery(e.target.value);
  };
  const handlePackageNameChange = (e) => {
    setPackageName(e.target.value);
  };

  const handleBackdropImageChange = (e) => {
    const files = e.target.files;
    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setBackdropImages((prevBackdropImages) => [
      ...prevBackdropImages,
      ...files,
    ]);
    setPreviewBackdropImages((prevPreviewImages) => [
      ...prevPreviewImages,
      ...newImages,
    ]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCreatePackage = () => {
    const packageData = {
      packageName: packageName,
      backdropImages: previewBackdropImages,
      description: description,
      selectedImages: selectedImages,
    };

    // Call the callback functions to pass the package data back to the parent component
    onSelectImage(previewBackdropImages);
    setImageDescription(description);
    onPackageChange(packageData);

    onClose();
  };
  const selectedImageCount = previewBackdropImages.length;

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Make Your Custom Package</DialogTitle>
        <DialogContent>
          <div className="mt-4"></div>
          <TextField
            label="Package Name"
            fullWidth
            value={packageName}
            onChange={handlePackageNameChange}
          />

          <input
            accept="image/*"
            id="backdrop-image-input"
            type="file"
            onChange={handleBackdropImageChange}
            style={{ display: "none" }}
            multiple // Allow multiple image selection
          />
          <div className="mt-2"></div>
          <TextField
            label="Search for Images"
            fullWidth
            value={imageSearchQuery}
            onChange={handleImageSearchQueryChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // Prevent the default Enter key behavior
                this.searchButton.click(); // Simulate a click on the "Search Images" button
              }
            }}
          />
          <div className="mt-2 flex justify-center">
            <Button
              ref={searchButtonRef}
              variant="contained"
              color="primary"
              onClick={handleImageSearch}
            >
              Search Images
            </Button>
          </div>

          <div className="mt-2">
            {searchResults.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Result ${index}`}
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  border: selectedImages.includes(image)
                    ? "2px solid #00f"
                    : "none", // Add border to indicate selection
                  cursor: "pointer", // Add pointer cursor to indicate clickability
                }}
                onClick={() => {
                  handleImageSelect(image);
                  setSelectedSearchImage(image); // Update the selected search image
                }}
              />
            ))}
          </div>

          <div className="mt-2 flex justify-center">
            <label htmlFor="backdrop-image-input">
              <Button variant="contained" color="primary" component="span">
                Upload Backdrop Images ({selectedImageCount})
              </Button>
            </label>
          </div>
          <div className="mt-2">
            {previewBackdropImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Preview ${index}`}
                style={{ width: "100%", marginBottom: "10px" }}
              />
            ))}
          </div>
          <div className="mt-4"></div>
          <TextField
            label="Description"
            fullWidth
            multiline
            value={description}
            onChange={handleDescriptionChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreatePackage}
          >
            Create Package
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomPackage;
