import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

interface SectionHeadingProps {
  topText?: string;
  title: string;
  titleSize?: string;
  titleUppercase?: boolean;
  subTitle?: React.ReactNode;
  textPosition?: string;
  topTextSize?: string | number;
  topTextColor?: string;
  topTextWeight?: string | number;
}

function SectionHeading({
  topText,
  title,
  titleSize,
  titleUppercase,
  subTitle,
  textPosition,
  topTextSize,
  topTextColor,
  topTextWeight,
}: SectionHeadingProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: '80px',
        [theme.breakpoints.up('md')]: {
          py: '24px',
        },
      }}
    >
      <Typography
        variant='h2'
        align={textPosition || 'center'}
        sx={{
          fontSize: topTextSize ?? '1.25rem',
          fontWeight: topTextWeight ?? '400',
          color: topTextColor ?? 'text.secondary',
        }}
      >
        {topText}
      </Typography>
      <Typography
        variant='h3'
        align={textPosition || 'center'}
        sx={{
          textTransform: titleUppercase ? 'uppercase' : 'none',
          my: '10px',
          fontSize: titleSize ?? '1.5rem',
        }}
      >
        {title}
      </Typography>
      <Typography
        align={textPosition || 'center'}
        sx={{ fontSize: '0.875rem', color: 'text.secondary' }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
}

export default SectionHeading;
