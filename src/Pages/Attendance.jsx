import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Attendance = () => {
    const initialFormData = {
        name: "",
        designation: "",
        companyname: "",
        role: "",
      };
      const [formData, setFormData] = useState(initialFormData);
      const [isLoading, setIsLoading] = useState(false);
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
            // Send the POST request using Axios
            const response = await axios.post(
              "http://127.0.0.1:8000/api/attendance/store",
              formData,
              {
                headers: {
                  Authorization: `Bearer ${authToken}`, // Include the access token in the Authorization header
                },
              }
            );
    
            if (response.status === 200) {
              toast.success("Attendance is stored", {
                position: toast.POSITION.TOP_RIGHT,
              });
              setFormData(initialFormData); // Reset the form fields after successful submission
            }
          } catch (e) {
            console.log("Error: " + e.message);
            toast.error("An error occurred. Please try again later.", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
    
          setIsLoading(false); // Hide loading state
        }
      };
  return (
    <div>
      <Navbar />
      <ToastContainer />
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
    </div>
  );
};
export default Attendance;
