import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";
import CommentSec from "./CommentSec";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [comments, setComments] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
      .catch((data) => console.log(data));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))

    fetchFromAPI(`commentThreads?part=snippet&maxResults=100&videoId=${id}`)
      .then((data) => setComments(data.items))

  }, [id])

  if (!videoDetail?.snippet) return 'Loading...';

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', top: '86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player" controls
              />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack flex="row" overflowY='auto' sx={{ color: '#fff' }} py={1}>
              <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{ sm: 'subtitle1', md: "h6" }} color='#fff'>
                    {channelTitle}
                    <CheckCircle sx={{ fontSize: '12px', ml: '5px', color: 'gray' }} />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
              <Box mt="50px" ml="15px">
                <Typography variant="h4" color='#fff' mb="25px">
                  Comments
                </Typography>
                <CommentSec items={comments} />
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail