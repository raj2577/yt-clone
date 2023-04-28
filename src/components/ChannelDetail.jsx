import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const {id} = useParams();

  console.log(channelDetail, videos);
  // useEffect(() => {
  //   fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setchannelDetail(data?.items[0]))

  //   fetchFromAPI(`search?channnelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))

  // }, [id])
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setchannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);


  return(
    <Box minHeight="95vh">
  {channelDetail && (
    <Box>
      <div
        style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,115,121,1) 35%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px',
        }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
    </Box>
  )}
  {videos && (
    <Box display="flex" p="2">
      <Box sx={{ mr: { sm: "100px"}}}/>
      <Videos videos={videos} /> 
    </Box>
  )}
</Box>
  )
};

export default ChannelDetail;
