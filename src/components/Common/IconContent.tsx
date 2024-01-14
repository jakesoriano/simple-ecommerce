import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

interface IconContentProps {
  icon: string;
  title: string;
  description: string;
}

function IconContent({ icon, title, description }: IconContentProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: '35px',
      }}
    >
      <Image src={icon} alt={title} />
      <Typography variant='h3' sx={{ my: '20px', fontSize: '1.25rem' }}>
        {title}
      </Typography>
      <Typography
        align='center'
        sx={{ fontSize: '0.875rem', color: 'text.secondary' }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default IconContent;
