import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const SignupComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    rePassword: '',
  });
  const navigate = useNavigate();
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.rePassword) {
      setPasswordMatchError('Passwords do not match');
      return; // Abort submission
    } else {
      setPasswordMatchError('');
    }

    try {
      // Send a POST request to the backend signup API
      const response = await axios.post('http://127.0.0.1:8000/api/register', formData);

      // Handle the response
      console.log(response.data);

      // Check if the response status is 201 (success)
      if (response.status === 201) {
        // Get the access token from the response

        // Show a success toast notification
            // Navigate to the login page after the toast is closed
        toast.success("Sign Up Sucessful", {
          position: toast.POSITION.TOP_RIGHT,
        });
            navigate('/login');

      }

      // Perform any necessary actions after successful signup
    } catch (error) {
      toast.error('Server is not connected', {
        position: toast.POSITION.TOP_RIGHT,
      });

    }

    setFormData({
      name: '',
      email: '',
      mobile: '',
      password: '',
      rePassword: '',
    });
  };

  return (
      <>
        <ToastContainer/>
        <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-sm space-y-6">
            <div>
              <img
                  className="mx-auto h-10 w-auto"
                  src="../public/image/logo_2x-100-removebg-preview.png"
                  alt="YFJ Logo"
              />
              <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign up to your account
              </h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
                <div>
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="relative w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="relative w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="sr-only">
                    Mobile
                  </label>
                  <input
                      id="mobile"
                      name="mobile"
                      type="text"
                      autoComplete="tel"
                      required
                      className="relative w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                      placeholder="Contact"
                      value={formData.mobile}
                      onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="relative w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="rePassword" className="sr-only">
                    Re-enter Password
                  </label>
                  <input
                      id="rePassword"
                      name="rePassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      className="relative w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-5"
                      placeholder="Re-enter Password"
                      value={formData.rePassword}
                      onChange={handleChange}
                  />
                  {passwordMatchError && (
                      <p className="text-red-500 text-sm">{passwordMatchError}</p>
                  )}
                </div>
              </div>
              <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold leading-5 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
  );
};

export default SignupComponent;
