import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Wedding from "../Components/Wedding.jsx";
import Mehendi from "../Components/Mehendi.jsx";
import Corporate from "../Components/Corporate.jsx";
import CustomPackage from "../Components/CustomPackage";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Carousel } from "antd";

const Package = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [showDescriptionDialog, setShowDescriptionDialog] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imageDescription, setImageDescription] = useState("");
  const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState("");
  const [searchedImages, setSearchedImages] = useState([]);
  const [packageName, setPackageName] = useState("");
  const authToken = localStorage.getItem("access_token");
  console.log("Access token: " + authToken);

  const CAROUSEL_INDEX_STORAGE_KEY = "carouselCurrentIndex";

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("selectedImages"));
    if (storedImages) {
      setSelectedImages(storedImages);
    }
  }, []);

  useEffect(() => {
    const storedIndex = JSON.parse(
      localStorage.getItem(CAROUSEL_INDEX_STORAGE_KEY)
    );
    if (storedIndex !== null) {
      setCarouselCurrentIndex(storedIndex);
    }
  }, []);
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSelectedImage = (imageURLs) => {
    setSelectedImages(imageURLs);
    setSearchedImages([]);
  };

  const handleDescriptionChange = (description) => {
    setImageDescription(description);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index); 
    setShowDescriptionDialog(true);
  };

  const handleCarouselChange = (index) => {
    setCarouselCurrentIndex(index);
  };

  const handlePackageNameChange = (packageName) => {
    setPackageName(packageName);
  };
  const handleDescriptionDialogClose = () => {
    setShowDescriptionDialog(false);
    setSelectedImageIndex(null); 
  };
  useEffect(() => {
    localStorage.setItem("selectedImages", JSON.stringify(selectedImages));
  }, [selectedImages]);

  useEffect(() => {
    localStorage.setItem(
      CAROUSEL_INDEX_STORAGE_KEY,
      JSON.stringify(carouselCurrentIndex)
    );
  }, [carouselCurrentIndex]);

  return (
    <div>
      <Navbar />
      {authToken && (
        <button
          onClick={handleDialogOpen}
          className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
        >
          Make Your Custom Package
        </button>
      )}

      <CustomPackage
        open={openDialog}
        onClose={handleDialogClose}
        onSelectImage={handleSelectedImage}
        setImageDescription={handleDescriptionChange}
        onPackageChange={handlePackageNameChange}
      />

      {/* Display only the first image */}
      {selectedImages.length > 0 && (
        <div>
          <h2 className="mt-4 text-2xl font-bold mb-4">Your Package: {packageName.packageName}</h2>
          {/* <img
            src={selectedImages[0]}
            className="cursor-pointer flex justify-center"
            alt="Selected"
            style={{ maxWidth: "300px" }}
            onClick={() => handleImageClick(0)}
          /> */}
        </div>
      )}

      {/* Description popup */}
      {showDescriptionDialog && selectedImageIndex !== null && (
        <Dialog
          open={showDescriptionDialog}
          onClose={handleDescriptionDialogClose}
        >
          <DialogTitle>Package Description</DialogTitle>
          <DialogContent>
            <p>{imageDescription}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDescriptionDialogClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {/* Slider */}
      <div className="flex justify-center mt-4">
        <Carousel
          autoplay
          className="w-[1100px] cursor-pointer"
          dots={true}
          afterChange={handleCarouselChange}
        >
          {selectedImages.concat(searchedImages).map((image, index) => (
            <div key={index} className="rounded-lg">
              <h3>
                <img
                  src={image}
                  className="w-full"
                  style={{ marginTop: "-80px", borderRadius: "10px" }}
                  onClick={() => handleImageClick(index)}
                />
              </h3>
            </div>
          ))}
        </Carousel>
      </div>

      <Wedding />
      <Mehendi />
      <Corporate />
    </div>
  );
};

export default Package;
