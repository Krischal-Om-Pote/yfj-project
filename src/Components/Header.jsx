import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Link to="/">
        <div className=" w-[80px] ml-4">
          <img src="../public/image/logo_2x-100-removebg-preview.png" alt="logo" />
        </div>
        </Link>
        <div className="text-lg sm:text-3xl font-bold">
          <h1>Your Event, Your Way</h1>
        </div>
        <div>
          <Stack direction="row" className="mr-6">
            <Link to="/login">
              <div className="px-2">
                <Button
                  variant="contained"
                  className=" w-[5px] sm:w-[100px] border"
                >
                  Login
                </Button>
              </div>
            </Link>
            <Link to="/signup">
            <Button variant="contained" className=" w-[5px] sm:w-[100px]">
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
