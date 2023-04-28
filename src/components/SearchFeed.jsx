import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";


import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
 
  const [videos, setvideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setvideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", flex: 2, height: "90vh" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:
        <span style={{ color: "#F31503" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
