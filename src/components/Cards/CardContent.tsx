import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

import Image, { StaticImageData } from 'next/image';
import { cardContentStyles } from '@/styles/cardContent';

interface CardContentProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  buttonText?: string;
}

function CardContent({
  image,
  title,
  description,
  buttonText = 'Read More',
}: CardContentProps) {
  const theme = useTheme();

  return (
    <Box sx={cardContentStyles.wrapper(theme)}>
      <Image
        src={image}
        alt={title}
        style={cardContentStyles.bgImage}
        priority={true}
        fill
      />
      <Typography component='h4' sx={cardContentStyles.description}>
        {description}
      </Typography>
      <Typography component='h3' sx={cardContentStyles.title}>
        {title}
      </Typography>
      <Typography component='span' sx={cardContentStyles.button}>
        {buttonText}
      </Typography>
    </Box>
  );
}

export default CardContent;
