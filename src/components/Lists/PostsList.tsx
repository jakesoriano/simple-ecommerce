import React from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

import ContentMediaCard from '@/components/Cards/ContentMediaCard';

function PostsList({ data }) {
  const theme = useTheme();

  const renderedPosts = data.map((item: any, index: number) => {
    return (
      <ContentMediaCard
        key={index}
        image={item.image}
        title={item.title}
        tags={item.tags}
        description={item.description}
        date={item.date}
        commentsCount={item.comments}
      />
    );
  });
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
          gap: '10px',
        },
      }}
    >
      {renderedPosts}
    </Box>
  );
}

export default PostsList;
