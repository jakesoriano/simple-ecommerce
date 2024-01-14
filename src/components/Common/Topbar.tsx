import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import { topbarStyles } from '@/styles/topbar';

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Topbar() {
  const theme = useTheme();

  return (
    <Box sx={topbarStyles.wrapper(theme)}>
      <Container>
        <Box sx={topbarStyles.topbar}>
          <Box sx={topbarStyles.contacts}>
            <Link sx={topbarStyles.contact} href='tel:+022295550118'>
              <LocalPhoneOutlinedIcon sx={topbarStyles.icon} />
              (02) 229-555-0118
            </Link>
            <Link
              sx={topbarStyles.contact}
              href='mailto:michelle.rivera@example.com'
            >
              <EmailOutlinedIcon sx={topbarStyles.icon} />
              michelle.rivera@example.com
            </Link>
          </Box>
          <Box>Follow Us and get a chance to win 80% off</Box>
          <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            Follow us :
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <InstagramIcon sx={topbarStyles.icon} />
              <YouTubeIcon sx={topbarStyles.icon} />
              <FacebookIcon sx={topbarStyles.icon} />
              <TwitterIcon sx={topbarStyles.icon} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Topbar;
