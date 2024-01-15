import { ReactNode } from 'react';

import SectionHeading from './SectionHeading';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface HeroCTAProps {
  bgImage?: string;
  title: string;
  description?: string | ReactNode;
  highlightText?: string;
  ctaText: string;
  topText?: string;
  topTextSize?: string | number;
  topTextColor?: string;
  topTextWeight?: string | number;
}

function HeroCTA({
  bgImage,
  title,
  description,
  highlightText,
  ctaText,
  topText,
  topTextSize,
  topTextColor,
  topTextWeight,
}: HeroCTAProps) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        pt: '120px',
        pb: '112px',
      }}
    >
      <Container>
        <Box sx={{ maxWidth: '607px', m: 'auto' }}>
          <SectionHeading
            topText={topText}
            subTitle={description}
            title={title}
            titleSize={'40px'}
            topTextSize={topTextSize}
            topTextColor={topTextColor}
            topTextWeight={topTextWeight}
          />
          <Typography
            sx={{
              mt: '6px',
              mb: '30px',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'secondary.main',
            }}
            align='center'
          >
            {highlightText}
          </Typography>
          <Button
            variant='contained'
            color='primary'
            sx={{ color: 'common.white', display: 'block', m: 'auto' }}
            disableElevation
          >
            {ctaText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroCTA;
