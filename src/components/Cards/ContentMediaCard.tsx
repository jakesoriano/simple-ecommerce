import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import EqualizerIcon from '@mui/icons-material/Equalizer';

interface ContentMediaCardProps {
  image: string;
  title: string;
  tags: string[];
  date: string;
  commentsCount: number;
  description: string;
}

function ContentMediaCard({
  image,
  title,
  tags,
  date,
  commentsCount,
  description,
}: ContentMediaCardProps) {
  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component='img'
          alt='green iguana'
          image={image}
          sx={{ height: '300px' }}
        />
      </Box>
      <CardContent>
        <Box sx={{ display: 'flex', gap: '16px', mb: '10px' }}>
          {tags.map((tag: string, index: number) => {
            return (
              <Typography key={index} sx={{ fontSize: '0.75rem' }}>
                {tag}
              </Typography>
            );
          })}
        </Box>
        <Typography
          gutterBottom
          variant='h4'
          component='div'
          sx={{ fontSize: '1.25rem' }}
        >
          {title}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ fontSize: '0.875rem' }}
        >
          {description}
        </Typography>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', mt: '24px' }}
        >
          <Box sx={{ display: 'flex', gap: '5px', fontSize: '0.75rem' }}>
            <AccessAlarmIcon sx={{ fontSize: '1rem' }} color='primary' />
            {date}
          </Box>
          <Box sx={{ display: 'flex', gap: '5px', fontSize: '0.75rem' }}>
            <EqualizerIcon sx={{ fontSize: '1rem' }} color='secondary' />
            {commentsCount} comments
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ContentMediaCard;
