import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const Attendance = () => {
  const initialFormData = {
    name: "",
    designation: "",
    companyname: "",
    role: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const authToken = localStorage.getItem("access_token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!authToken) {
      // Redirect the user to the signup/login page
      toast.warn("Please Signup", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/signup");
    } else {
      setIsLoading(true); // Show loading state

      try {
       
        const response = await axios.post(
          "http://127.0.0.1:8000/api/attendance/store",
          formData,
          {
            headers: {
              Authorization: `Bearer ${authToken}`, 
            },
          }
        );

        if (response.status === 200) {
          // toast.success("Attendance is stored", {
          //   position: toast.POSITION.TOP_RIGHT,
          // });
        }
      } catch (e) {
        // console.log("Error: " + e.message);
        // toast.error("An error occurred. Please try again later.", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
      }
      
      const newData = {
        name: formData.name,
        designation: formData.designation,
        companyname: formData.companyname,
        role: formData.role,
      };

      console.log(newData);
      savedAttendanceData.push(newData);
      setFormSubmitted(true); 
      localStorage.setItem("attendance_data", JSON.stringify(savedAttendanceData));
      setIsLoading(false); // Hide loading state
      setFormData(initialFormData); 
    }
  };
  const savedAttendanceData =
    JSON.parse(localStorage.getItem("attendance_data")) || [];
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Attendance
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="full-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                id="name"
                name="name"
                required
                className="block  px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="designation"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Designation
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="companyname"
                name="companyname"
                value={formData.companyname}
                onChange={handleChange}
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="role"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Role
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
      {formSubmitted && (
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900 mt-8">
            Attendance Data
          </h2>
          <TableContainer component={Paper} className="mt-4">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Designation</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {savedAttendanceData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.designation}</TableCell>
                    <TableCell>{data.companyname}</TableCell>
                    <TableCell>{data.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};
export default Attendance;
