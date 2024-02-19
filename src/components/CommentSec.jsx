import React from 'react'
import { Stack, Box } from '@mui/material';
import CommentCard from './CommentCard';

const CommentSec = ({items}) => {
  if (!items?.length) return 'Loading...';
  return (
    <Stack direction="column" flexWrap ="wrap" justifyContent="start" gap={2} >
        {items.map((item,idx) => (
            <Box key={idx}>
                {item.id && <CommentCard item = {item}/>}
            </Box>
        ))}
    </Stack>
  )
}

export default CommentSec