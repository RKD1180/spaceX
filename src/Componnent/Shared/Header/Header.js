import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#00BFFF",
  color: "white",

  "&:hover": {
    backgroundColor: "#00BFFF",
    color: "white",
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
  cursor: "pointer",
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
      width: "20ch",
    },
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const handleSearch = (text, e) => {
    e.preventDefault();
    setSearchText(text);
    navigate(`/search/${text}`);
  };

  // header
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar
        position="fixed"
        elevation={1}
        style={{ backgroundColor: "white", color: "#00BFFF" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              SpaceX
            </Typography>

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
                <Link
                  to="/"
                  style={{
                    color: "#00BFFF",
                    textDecoration: "none",
                    marginRight: 10,
                  }}
                >
                  Home
                </Link>

                <Link
                  to="/failure"
                  style={{
                    color: "#00BFFF",
                    textDecoration: "none",
                    marginRight: 10,
                  }}
                >
                  Failure
                </Link>

                <Link
                  to="/success"
                  style={{
                    color: "#00BFFF",
                    textDecoration: "none",
                    marginRight: 10,
                  }}
                >
                  Success
                </Link>
                <Link
                  to="/upcoming"
                  style={{
                    color: "#00BFFF",
                    textDecoration: "none",
                    marginRight: 10,
                  }}
                >
                  Upcoming
                </Link>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              SpaceX
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link
                to="/"
                style={{
                  color: "#00BFFF",
                  textDecoration: "none",
                  marginRight: 10,
                }}
              >
                Home
              </Link>

              <Link
                to="/failure"
                style={{
                  color: "#00BFFF",
                  textDecoration: "none",
                  marginRight: 10,
                }}
              >
                Failure
              </Link>

              <Link
                to="/success"
                style={{
                  color: "#00BFFF",
                  textDecoration: "none",
                  marginRight: 10,
                }}
              >
                Success
              </Link>
              <Link
                to="/upcoming"
                style={{
                  color: "#00BFFF",
                  textDecoration: "none",
                  marginRight: 10,
                }}
              >
                Upcoming
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Link
                  to="/"
                  style={{
                    color: "#00BFFF",
                    textDecoration: "none",
                    marginRight: 10,
                  }}
                >
                  Home
                </Link>

                <Link
                  to="/failure"
                  style={{
                    color: "#00BFFF",
                    textDecoration: "none",
                    marginRight: 10,
                  }}
                >
                  Failure
                </Link>

                <Link
                  to="/success"
                  style={{
                    color: "#00BFFF",
                    textDecoration: "none",
                    marginRight: 10,
                  }}
                >
                  Success
                </Link>
                <Link
                  to="/upcoming"
                  style={{
                    color: "#00BFFF",
                    textDecoration: "none",
                    marginRight: 10,
                  }}
                >
                  Upcoming
                </Link>
              </Menu>
            </Box>
            <Search>
              <Button
                onClick={(e) => {
                  console.log("click");
                  if (searchText !== "") {
                    handleSearch(searchText, e);
                  }
                }}
                sx={{ padding: { md: "21px 2px" } }}
                style={{
                  color: "white",
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon sx={{ mt: { xs: 5, md: 0 } }} />
                </SearchIconWrapper>
              </Button>
              <StyledInputBase
                sx={{ mt: { xs: -4, md: 0 } }}
                placeholder="Search…"
                defaultValue={searchText}
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.target.value !== "") {
                    handleSearch(e.target.value, e);
                  }
                }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
