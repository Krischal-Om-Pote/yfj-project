import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { useLocation, Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";

// const pages = ["Home", "Booking", "Suppliers", "About", "Contact Us"];
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  let location = useLocation();

  const [current, setCurrent] = useState(location.pathname);
  // console.log(current);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  return (
    <div>
      <AppBar position="static" className="mt-4 w-full">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem>
                  <Typography textAlign="center" className="p-5">
                    <ul>
                      <Link to="/">
                        <li className={current === "/" ? "font-bold" : ""}>
                          Home
                        </li>
                      </Link>
                      <li>
                        <a href="asdas">Booking</a>
                      </li>
                      <li>Suppliers</li>
                      <Link to="/about">
                        <li className={current === "/about" ? "font-bold" : ""}>
                          About Us
                        </li>
                      </Link>
                      <li>Contact Us</li>
                    </ul>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
 
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              ></Button>
              <div className="flex items-center space-x-4 cursor-pointer">
                <Link to="/">
                  <div className={current === "/" ? "font-bold" : ""}>Home</div>
                  {/* {console.log("current", current)} */}
                </Link>
                <Link to="/booking">
                  <div className={current === "/booking" ? "font-bold" : ""}>
                    Booking
                  </div>
                </Link>
                <Link to="/suppliers">
                  <div className={current === "/suppliers" ? "font-bold" : ""}>
                    Suppliers
                  </div>
                </Link>
                <Link to="/about">
                  <div className={current === "/about" ? "font-bold" : ""}>
                    About Us
                  </div>
                </Link>
                <Link to="/contact">
                  <div className={current === "/contact" ? "font-bold" : ""}>
                    Contact Us
                  </div>
                </Link>
              </div>
            </Box>

            <Search className="">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
