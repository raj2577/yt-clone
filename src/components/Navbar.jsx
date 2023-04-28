import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import Searchbar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "black",
        justifyContent: "space-between",
      }}
    >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" style={{ width: "50px" }} /> 
        </Link>
        <Searchbar />
    </Stack>
  );
};

export default Navbar;
