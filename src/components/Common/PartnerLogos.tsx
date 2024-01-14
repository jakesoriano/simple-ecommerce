import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

import AWSLogo from '@/assets/icons/fa-brands_aws.svg';
import HooliLogo from '@/assets/icons/fa-brands_hooli.svg';
import LyftLogo from '@/assets/icons/fa-brands_lyft.svg';
import PiedPiperHatLogo from '@/assets/icons/fa-brands_pied-piper-hat.svg';
import StripeLogo from '@/assets/icons/fa-brands_stripe.svg';
import RedditLogo from '@/assets/icons/fa-brands_reddit-alien.svg';

function PartnerLogos() {
  const partners: string[] = [
    AWSLogo,
    HooliLogo,
    LyftLogo,
    PiedPiperHatLogo,
    StripeLogo,
    RedditLogo,
  ];
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
          flexDirection: 'row',
        },
      }}
    >
      {partners.map((logo, index) => {
        return (
          <Box
            key={index}
            sx={{ height: '142px', width: '100%', position: 'relative' }}
          >
            <Image
              src={logo}
              alt={`partner-${index + 1}`}
              style={{
                objectFit: 'contain',
              }}
              fill
            />
          </Box>
        );
      })}
    </Box>
  );
}

export default PartnerLogos;
