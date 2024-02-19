import React from 'react'
import { Box, Stack, Typography,Card } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const CommentCard = ({item:{snippet: {topLevelComment: {snippet}}}}) => {
  return (
    <Card flexDirection="row" sx={{boxShadow:'none', borderRadius: 0,background: '#1e1e1e', pt: '5px', pb: '15px'}} display="flex" alignItems="center">
        <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
            <Typography variant="h6" color='#fff'>
                {snippet.authorDisplayName}
                <CheckCircle sx={{ fontSize: '12px', ml: '5px', color: 'gray' }} />
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.7 , position: "relative", left:"-40px" }}>
                <span style={{position:"absolute", top:"15px"}}>{snippet?.likeCount}</span> 
                <ThumbUpIcon sx={{ fontSize: '25px', ml: '5px', mt:'10px',  color: '#fff', left:"15px", position:"absolute" }}/>
            </Typography>
        </Stack>
        <Typography variant={{ sm: 'subtitle2', md: "subtitle1" }} color='#fff' sx={{pl: '15px', overflowWrap: "break-word", fontFamily: "Roboto"}} >
                {snippet.textOriginal}
        </Typography>
    </Card>
  )
}

export default CommentCard