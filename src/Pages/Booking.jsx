import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
} from "@mui/material";

const Booking = () => {
  const [name, setName] = useState("");

  const [bookDate, setBookDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bookingType, setBookingType] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform booking logic or API call here
    console.log(
      "Booking submitted:",
      name,
      "Booking type",
      bookingType,
      "booking ko",
      bookDate,
      "start ko",
      startDate,
      "enddate  ko",
      endDate
    );
    // Reset form fields
    
    setName("");

    setBookDate(null);
    setStartDate(null);
    setEndDate(null);
    setBookingType("");
    setIsTermsChecked(false);
  };
  const handleBookDateChange = (date) => {
    setBookDate(date);
    setStartDate(date); // Set the selected booking date as the start date
  };
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="container mx-auto mt-4">
        {/* <h1 className="text-2xl font-bold text-center mb-6">Booking Page</h1> */}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-8 rounded shadow"
        >
          <div className="flex gap-2 mb-4">
            <TextField
              variant="outlined"
              label="Name"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4"
              required
            />

            <TextField
              select
              value={bookingType}
              onChange={(e) => setBookingType(e.target.value)}
              variant="outlined"
              label="Booking Type"
              size="small"
              required
              sx={{ width: 235, textAlign: "left" }}
            >
              <MenuItem value="marriage">Marriage</MenuItem>
              <MenuItem value="marriage">Marriage</MenuItem>
              <MenuItem value="marriage">Marriage</MenuItem>
              <MenuItem value="marriage">Marriage</MenuItem>
              {/* Add more booking types as needed */}
            </TextField>
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Booking Date:</label>
            <DatePicker
              selected={bookDate}
              onChange={handleBookDateChange}
              selectsStart
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              isClearable
              placeholderText="Select booking date"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-1">Start Date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              isClearable
              placeholderText="Select start date"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-1">End Date:</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd/MM/yyyy"
              minDate={startDate}
              isClearable
              placeholderText="Select end date"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <FormControlLabel
            control={
              <Checkbox
                checked={isTermsChecked}
                onChange={(e) => setIsTermsChecked(e.target.checked)}
                color="primary"
                required
              />
            }
            label="I agree to the terms and conditions"
            className="mb-4"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50" 
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
