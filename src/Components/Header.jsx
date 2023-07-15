import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center p-4 sm:p-6">
        <Link to="/">
          <div className="w-20 sm:w-32">
            <img
              src="../public/image/logo_2x-100-removebg-preview.png"
              alt="logo"
              className="w-full"
            />
          </div>
        </Link>
        <div className="text-lg sm:text-3xl font-bold flex-auto text-center sm:text-left">
          <h1>Your Event, Your Way</h1>
        </div>
        <div className="flex items-center justify-end flex-auto mt-4 sm:mt-0">
          <Stack direction="row" spacing={2}>
            <Link to="/login">
              <div className="px-2">
                <Button
                  variant="contained"
                  className="w-full sm:w-auto border"
                >
                  Login
                </Button>
              </div>
            </Link>
            <Link to="/signup">
              <Button variant="contained" className="w-full sm:w-auto">
                Signup
              </Button>
            </Link>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Header;
