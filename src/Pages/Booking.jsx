import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Button,
} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

const Booking = () => {
  const [bookDate, setBookDate] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBookDate(null);
    setStartDate(null);
    setEndDate(null);
    setBookingType("");
    setIsTermsChecked(false);
  };
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bookingType, setBookingType] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [timer, setTimer] = useState(5 * 60);
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const authToken = localStorage.getItem("access_token");
  const handleBookNow = () => {
    // Check for the access token in localStorage (you should replace this with your real authentication logic)

    if (!authToken) {
      // Redirect the user to the signup/login page
      toast.warn("Please Signup", {
        position: toast.POSITION.TOP_RIGHT,
      });
      // alert("please singnup")
      navigate("/signup"); // Replace "/signup" with your actual signup/login route
    } else {
      handleClickOpen();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!bookingType || !bookDate || !startDate || !endDate || !isTermsChecked) {
      toast.error("Please fill in all the required fields.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return; // Stop form submission if any field fails validation
    }
    // Format the dates to "yyyy-mm-dd" format
    const formattedBookDate = bookDate.toISOString().slice(0, 10);
    const formattedStartDate = startDate.toISOString().slice(0, 10);
    const formattedEndDate = endDate.toISOString().slice(0, 10);
    // Prepare the booking data to send to the server
    const bookingData = {
      bookingType: bookingType,
      bookDate:formattedBookDate,
      startDate: formattedStartDate,
      endDate:  formattedEndDate,
    };
    console.log("bookdate", formattedBookDate);
    try {
      // Send the POST request using Axios
      const response = await axios.post("http://127.0.0.1:8000/api/createbooking", bookingData, {
        headers: {
          Authorization: `Bearer ${authToken}`, // Include the access token in the Authorization header
        },
      });

      if (response.status === 200) {
        // Success: Reset form fields
        setBookDate(null);
        setStartDate(null);
        setEndDate(null);
        setBookingType("");

        console.log("Booking submitted successfully!");
      } else {
        // Handle error scenarios
        alert(error);
        console.error("Error submitting booking:", response.status);
      }
    } catch (error) {
      alert("Error",error)
      console.error("Error submitting booking:", error);
    }
  };

  useEffect(() => {
    let interval;

    if (open && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      toast.warn('Please reload the page', {
        position: toast.POSITION.TOP_RIGHT,
      });
      // Handle timer expiration here
      return () => clearInterval(interval);
      // For example, you can disable the button and show a message to reload the page
    }

    return () => clearInterval(interval); // Clean up the interval on component unmount or dialog close
  }, [open, timer]);
  const handleBookDateChange = (date) => {
    setBookDate(date);
    setStartDate(date); // Set the selected booking date as the start date
  };


  return (
    <div>
      <Navbar />
      <ToastContainer/>
      <Slider />
      <div className="container mx-auto mt-4">
        <Button variant="contained" onClick={handleClickOpen}>
          Book Now
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className="flex justify-center">Book Now</DialogTitle>
          <DialogContent>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto bg-white p-8 rounded shadow"
            >
              <div className="flex gap-2 mb-4">
                {/*<TextField*/}
                {/*    variant="outlined"*/}
                {/*    label="Name"*/}
                {/*    size="small"*/}
                {/*    value={name}*/}
                {/*    onChange={(e) => setName(e.target.value)}*/}
                {/*    className="mb-4"*/}
                {/*    required*/}
                {/*/>*/}
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
                  <MenuItem value="1">Marriage</MenuItem>
                  <MenuItem value="2">Marriage</MenuItem>
                  <MenuItem value="3">Marriage</MenuItem>
                  <MenuItem value="4">Marriage</MenuItem>
                  {/* Add more booking types as needed */}
                </TextField>
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1">Booking Date:</label>
                <DatePicker
                    selected={bookDate}
                    onChange={handleBookDateChange}
                    selectsStart
                    dateFormat="P" // Use "P" to display the localized date format
                    locale="en-US" // Set the desired locale
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
                    dateFormat="P" // Use "P" to display the localized date format
                    locale="en-US" // Set the desired locale
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
                    dateFormat="P" // Use "P" to display the localized date format
                    locale="en-US" // Set the desired locale
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
                  disabled={timer === 0}
                  onClick={handleBookNow}
              >
                Book Now ({Math.floor(timer / 60)}:{timer % 60})
              </button>
            </form>
          </DialogContent>
        </Dialog>
        {/* <h1 className="text-2xl font-bold text-center mb-6">Booking Page</h1> */}

      </div>
    </div>
  );
};

export default Booking;
