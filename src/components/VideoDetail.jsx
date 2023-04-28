import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  const { id } = useParams();
  
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&type=video&relatedToVideoId=${id}&maxResults=10`).then((data) =>
      setRelatedVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle, description, thumbnails },
    statistics: {
      viewCount,
      likeCount,
      dislikeCount,
      favoriteCount,
      commentCount,
    },
  } = videoDetail || {};

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", top: "86px", position: "sticky" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: " subtitle", md: "h4" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction='row' gap ='20px' alignItems='center'>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {" "}
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {" "}
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      <Box px={2} py={{md:1, xs: 5}} justifyContent='center' alignItems={'center'} >
        <Videos videos={relatedVideos} direction="column" />
      </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
