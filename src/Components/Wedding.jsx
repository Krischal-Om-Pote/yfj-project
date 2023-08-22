import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
const Wedding = () => {
  const photos = [
    {
      src: "https://assets.vogue.com/photos/645ba7a6a22b7272aab20623/4:3/w_2436,h_1827,c_limit/Kamila%20&%20Oren%2048.jpg",
      description: " <div class=\"container mx-auto p-8\">\n" +

          "        <ul class=\"list-disc pl-6 mb-4\">\n" +
          "            <li class=\"mb-2\">Full venue decoration with flowers and lighting.</li>\n" +
          "            <li class=\"mb-2\">Dedicated wedding planner to assist with all arrangements.</li>\n" +
          "            <li class=\"mb-2\">Catering services with a custom menu and multiple cuisine options.</li>\n" +
          "            <li class=\"mb-2\">Professional photography and videography coverage.</li>\n" +
          "            <li class=\"mb-2\">Live music band or DJ for entertainment.</li>\n" +
          "        </ul>\n" +
          "        <p class=\"text-xl font-bold text-orange-500\">Price: $10,000</p>\n" +
          "    </div>",
      rating: 5,
    },
    {
      src:"https://www.theknot.com/tk-media/images/f4570601-a1e6-4802-86fb-ad9e988066fe",
      description:" <div class=\"container mx-auto p-8\">\n" +

          "        <ul class=\"list-disc pl-6 mb-4\">\n" +
          "            <li class=\"mb-2\">Full venue decoration with flowers and lighting.</li>\n" +
          "            <li class=\"mb-2\">Dedicated wedding planner to assist with all arrangements.</li>\n" +
          "            <li class=\"mb-2\">Catering services with a custom menu and multiple cuisine options.</li>\n" +
          "            <li class=\"mb-2\">Professional photography and videography coverage.</li>\n" +
          "            <li class=\"mb-2\">Live music band or DJ for entertainment.</li>\n" +
          "        </ul>\n" +
          "        <p class=\"text-xl font-bold text-orange-500\">Price: $10,000</p>\n" +
          "    </div>",
      rating: 4,
    },
    {
      src:"banner2.jpeg",
      description: " <div class=\"container mx-auto p-8\">\n" +

          "        <ul class=\"list-disc pl-6 mb-4\">\n" +
          "            <li class=\"mb-2\">Full venue decoration with flowers and lighting.</li>\n" +
          "            <li class=\"mb-2\">Dedicated wedding planner to assist with all arrangements.</li>\n" +
          "            <li class=\"mb-2\">Catering services with a custom menu and multiple cuisine options.</li>\n" +
          "            <li class=\"mb-2\">Professional photography and videography coverage.</li>\n" +
          "            <li class=\"mb-2\">Live music band or DJ for entertainment.</li>\n" +
          "        </ul>\n" +
          "        <p class=\"text-xl font-bold text-orange-500\">Price: $10,000</p>\n" +
          "    </div>",
      rating: 3,
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/578537f5cd0f68f8a7411561/1569002290085-NDGE7SVHVLV3XL9VJ4S6/Hyatt+Regency+Scottsdale.jpg",
      description: " <div class=\"container mx-auto p-8\">\n" +

          "        <ul class=\"list-disc pl-6 mb-4\">\n" +
          "            <li class=\"mb-2\">Full venue decoration with flowers and lighting.</li>\n" +
          "            <li class=\"mb-2\">Dedicated wedding planner to assist with all arrangements.</li>\n" +
          "            <li class=\"mb-2\">Catering services with a custom menu and multiple cuisine options.</li>\n" +
          "            <li class=\"mb-2\">Professional photography and videography coverage.</li>\n" +
          "            <li class=\"mb-2\">Live music band or DJ for entertainment.</li>\n" +
          "        </ul>\n" +
          "        <p class=\"text-xl font-bold text-orange-500\">Price: $10,000</p>\n" +
          "    </div>",
      rating: 2,
    },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [rating, setRating] = useState(0);

  const handlePhotoClick = (index) => {
    setSelectedPhoto(photos[index]);
  };

  const handleCloseDialog = () => {
    setSelectedPhoto(null);
  };
  const handleRatingChange = (value) => {
    setRating(value);
  };
  return (
    <div>
      <div className="photo-gallery">
        <h2 className="mt-4 text-2xl font-bold mb-4">Wedding</h2>
        <div className="flex justify-center gap-2">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo.src}
              alt={`Photo ${index + 1}`}
              className="photo cursor-pointer"
              onClick={() => handlePhotoClick(index)}
              width="280px"
            />
          ))}
        </div>
        <Dialog open={selectedPhoto !== null} onClose={handleCloseDialog}>
          <DialogTitle>Package Description</DialogTitle>
          <DialogContent>
            <img
              src={selectedPhoto?.src}
              alt="Selected Photo"
              className="selected-photo cursor-pointer"
              width="300px"
            />
            <div dangerouslySetInnerHTML={{ __html: selectedPhoto?.description }} />
            <Rating
            name="rating"
            value={rating}
            onChange={(event, value) => handleRatingChange(value)}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            className="ml-8"
          />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Wedding;
