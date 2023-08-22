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

const Corporate = () => {
    const photos = [
        {
            src: "https://eventacademy.com/wp-content/uploads/2018/11/cambridge-corporate-photographer-io-2016-003.jpg",
            description: "  <div class=\"container mx-auto p-8\">\n" +
                "        <ul class=\"list-disc pl-6 mb-4\">\n" +
                "            <li class=\"mb-2\">Customized venue setup based on the event theme and requirements.</li>\n" +
                "            <li class=\"mb-2\">Comprehensive event planning and coordination services.</li>\n" +
                "            <li class=\"mb-2\">Gourmet catering with various menu options.</li>\n" +
                "            <li class=\"mb-2\">State-of-the-art audiovisual equipment and technical support.</li>\n" +
                "            <li class=\"mb-2\">Keynote speakers or entertainment options as per client's preference.</li>\n" +
                "        </ul>\n" +
                "        <p class=\"text-xl font-bold text-orange-500\">Price: $5,000</p>\n" +
                "    </div>",
            rating: 5,
        },
        {
            src:"https://www.hedgethink.com/wp-content/uploads/2020/01/corporate-events.jpg",
            description:  "  <div class=\"container mx-auto p-8\">\n" +
                "        <ul class=\"list-disc pl-6 mb-4\">\n" +
                "            <li class=\"mb-2\">Customized venue setup based on the event theme and requirements.</li>\n" +
                "            <li class=\"mb-2\">Comprehensive event planning and coordination services.</li>\n" +
                "            <li class=\"mb-2\">Gourmet catering with various menu options.</li>\n" +
                "            <li class=\"mb-2\">State-of-the-art audiovisual equipment and technical support.</li>\n" +
                "            <li class=\"mb-2\">Keynote speakers or entertainment options as per client's preference.</li>\n" +
                "        </ul>\n" +
                "        <p class=\"text-xl font-bold text-orange-500\">Price: $5,000</p>\n" +
                "    </div>",
            rating: 4,
        },
        {
            src:"https://www.chennaiconventioncentre.com/wp-content/uploads/2019/02/chennaiCC-820x410.jpg",
            description:  "  <div class=\"container mx-auto p-8\">\n" +
                "        <ul class=\"list-disc pl-6 mb-4\">\n" +
                "            <li class=\"mb-2\">Customized venue setup based on the event theme and requirements.</li>\n" +
                "            <li class=\"mb-2\">Comprehensive event planning and coordination services.</li>\n" +
                "            <li class=\"mb-2\">Gourmet catering with various menu options.</li>\n" +
                "            <li class=\"mb-2\">State-of-the-art audiovisual equipment and technical support.</li>\n" +
                "            <li class=\"mb-2\">Keynote speakers or entertainment options as per client's preference.</li>\n" +
                "        </ul>\n" +
                "        <p class=\"text-xl font-bold text-orange-500\">Price: $5,000</p>\n" +
                "    </div>",
            rating: 3,
        },
        {
            src: "https://www.pingpongmoments.in/blog/wp-content/uploads/2020/04/corporate-party.png",
            description:  "  <div class=\"container mx-auto p-8\">\n" +
                "        <ul class=\"list-disc pl-6 mb-4\">\n" +
                "            <li class=\"mb-2\">Customized venue setup based on the event theme and requirements.</li>\n" +
                "            <li class=\"mb-2\">Comprehensive event planning and coordination services.</li>\n" +
                "            <li class=\"mb-2\">Gourmet catering with various menu options.</li>\n" +
                "            <li class=\"mb-2\">State-of-the-art audiovisual equipment and technical support.</li>\n" +
                "            <li class=\"mb-2\">Keynote speakers or entertainment options as per client's preference.</li>\n" +
                "        </ul>\n" +
                "        <p class=\"text-xl font-bold text-orange-500\">Price: $5,000</p>\n" +
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
                <h2 className="mt-4 text-2xl font-bold mb-4">Corporate Event </h2>
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

export default Corporate