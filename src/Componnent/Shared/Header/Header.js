import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";

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
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar
        position="fixed"
        elevation={1}
        style={{ backgroundColor: "white", color: "#00BFFF" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            style={{ fontWeight: "bold" }}
          >
            <Link to="/" style={{ color: "#00BFFF", textDecoration: "none" }}>
              SpaceX
            </Link>
          </Typography>

          <Search>
            <Button
              onClick={(e) => {
                console.log("click");
                if (searchText !== "") {
                  handleSearch(searchText, e);
                }
              }}
              style={{
                color: "white",
                padding: "21px 2px",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </Button>
            <StyledInputBase
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
      </AppBar>
    </Box>
  );
};

export default Header;
