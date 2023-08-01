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

const Videographer = () => {
    const photos = [
        {
          src: "https://www.postoast.com/wp-content/uploads/2020/07/Mehndi-ceremony-Significance-1.jpg",
          description: " <div class=\"container mx-auto p-8\">\n" +
              "        <ul class=\"list-disc pl-6 mb-4\">\n" +
              "            <li class=\"mb-2\">Vibrant mehendi-themed decorations and ambiance.</li>\n" +
              "            <li class=\"mb-2\">Skilled mehendi artist for intricate henna designs.</li>\n" +
              "            <li class=\"mb-2\">Refreshments and snacks for guests during the event.</li>\n" +
              "            <li class=\"mb-2\">Fun-filled activities and games for guests to enjoy.</li>\n" +
              "            <li class=\"mb-2\">Mehendi giveaways and souvenirs.</li>\n" +
              "        </ul>\n" +
              "        <p class=\"text-xl font-bold text-orange-500\">Price: $1,500</p>\n" +
              "    </div>",
          rating: 5,
        },
        {
          src:"https://images.squarespace-cdn.com/content/v1/5727974359827e5304ee8ddf/1552366753924-FQ1WHVTXU8N00VXFRCQQ/Mehndi-ceremony.jpg",
          description:  " <div class=\"container mx-auto p-8\">\n" +
              "        <ul class=\"list-disc pl-6 mb-4\">\n" +
              "            <li class=\"mb-2\">Vibrant mehendi-themed decorations and ambiance.</li>\n" +
              "            <li class=\"mb-2\">Skilled mehendi artist for intricate henna designs.</li>\n" +
              "            <li class=\"mb-2\">Refreshments and snacks for guests during the event.</li>\n" +
              "            <li class=\"mb-2\">Fun-filled activities and games for guests to enjoy.</li>\n" +
              "            <li class=\"mb-2\">Mehendi giveaways and souvenirs.</li>\n" +
              "        </ul>\n" +
              "        <p class=\"text-xl font-bold text-orange-500\">Price: $1,500</p>\n" +
              "    </div>",
          rating: 4,
        },
        {
            src:"https://www.hergamut.in/wp-content/uploads/2016/11/Mehndi-Ceremony01.jpg",
          description: " <div class=\"container mx-auto p-8\">\n" +
              "        <ul class=\"list-disc pl-6 mb-4\">\n" +
              "            <li class=\"mb-2\">Vibrant mehendi-themed decorations and ambiance.</li>\n" +
              "            <li class=\"mb-2\">Skilled mehendi artist for intricate henna designs.</li>\n" +
              "            <li class=\"mb-2\">Refreshments and snacks for guests during the event.</li>\n" +
              "            <li class=\"mb-2\">Fun-filled activities and games for guests to enjoy.</li>\n" +
              "            <li class=\"mb-2\">Mehendi giveaways and souvenirs.</li>\n" +
              "        </ul>\n" +
              "        <p class=\"text-xl font-bold text-orange-500\">Price: $1,500</p>\n" +
              "    </div>",
          rating: 3,
        },
        {
          src: "https://www.thebridalbox.com/wp-content/uploads/2016/07/mehndi-cermony.jpg",
          description: " <div class=\"container mx-auto p-8\">\n" +
              "        <ul class=\"list-disc pl-6 mb-4\">\n" +
              "            <li class=\"mb-2\">Vibrant mehendi-themed decorations and ambiance.</li>\n" +
              "            <li class=\"mb-2\">Skilled mehendi artist for intricate henna designs.</li>\n" +
              "            <li class=\"mb-2\">Refreshments and snacks for guests during the event.</li>\n" +
              "            <li class=\"mb-2\">Fun-filled activities and games for guests to enjoy.</li>\n" +
              "            <li class=\"mb-2\">Mehendi giveaways and souvenirs.</li>\n" +
              "        </ul>\n" +
              "        <p class=\"text-xl font-bold text-orange-500\">Price: $1,500</p>\n" +
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
        <h2 className="mt-4 text-2xl font-bold mb-4">Mehendi Ceremony </h2>
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
          <DialogTitle>Photo Description</DialogTitle>
          <DialogContent>
            <img
              src={selectedPhoto?.src}
              alt="Selected Photo"
              className="selected-photo cursor-pointer"
              width="280px"
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
  )
}

export default Videographer