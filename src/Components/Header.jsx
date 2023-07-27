import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Perform any necessary actions for logging out the user
    // For example, remove the access token from local storage and reset the login state
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
  };

  return (
      <div>
        <div className="flex flex-wrap justify-between items-center p-4 sm:p-6">
          <Link to="/">
            <div className="w-20 sm:w-48">
              <img
                  src="../public/image/YFJ.png"
                  alt="logo"
                  className="w-full"
                  width="100px"
                  height="100px"
              />
            </div>
          </Link>
          <div className="text-lg sm:text-3xl font-bold flex-auto text-center sm:text-left">
            <h1>Your Event, Your Way</h1>
          </div>
          <div className="flex items-center justify-end flex-auto mt-4 sm:mt-0">
            <Stack direction="row" spacing={2}>
              {!isLoggedIn ? (
                  <>
                    <Link to="/login">
                      <div className="px-2">
                        <Button variant="contained" className="w-full sm:w-auto border">
                          Login
                        </Button>
                      </div>
                    </Link>
                    <Link to="/signup">
                      <Button variant="contained" className="w-full sm:w-auto">
                        Signup
                      </Button>
                    </Link>
                  </>
              ) : (
                  <Button variant="contained" className="w-full sm:w-auto" onClick={handleLogout}>
                    Logout
                  </Button>
              )}
            </Stack>
          </div>
        </div>
      </div>
  );
};

export default Header;
