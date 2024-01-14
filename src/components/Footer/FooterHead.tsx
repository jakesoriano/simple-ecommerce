import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function FooterHead() {
  return (
    <>
      <Container>
        <Box
          sx={{
            borderBottom: '1px solid #858585',
            py: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant='h3'>Bandage</Typography>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <FacebookIcon color='primary' />
            <InstagramIcon color='primary' />
            <TwitterIcon color='primary' />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default FooterHead;
