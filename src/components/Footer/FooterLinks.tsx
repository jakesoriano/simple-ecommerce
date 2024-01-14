import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';

const footerLinksData = [
  {
    category: 'Company Info',
    links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
  },
  {
    category: 'Legal',
    links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
  },
  {
    category: 'Features',
    links: [
      'Business Marketing',
      'User Analytic',
      'Live Chat',
      'Unlimited Support',
    ],
  },
  {
    category: 'Resources',
    links: ['iOS & Android', 'Watch a demo', 'Customers', 'API'],
  },
];

const renderedFooterLinks = footerLinksData.map(
  (item: any, itemIdx: number) => {
    return (
      <Box>
        <Typography key={itemIdx} sx={{ fontWeight: 700, mb: '20px' }}>
          {item.category}
        </Typography>
        {item.links.map((link: any, linkIdx: number) => {
          return (
            <Typography
              key={linkIdx}
              sx={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'text.secondary',
                mb: '10px',
                cursor: 'pointer',
              }}
            >
              {link}
            </Typography>
          );
        })}
      </Box>
    );
  }
);

const renderGelInTouch = (
  <Box>
    <Typography sx={{ fontWeight: 700, mb: '20px' }}>Get In Touch</Typography>
    <Box sx={{ display: 'flex' }}>
      <TextField variant='filled' label='You email' />
      <Button
        variant='contained'
        disableElevation
        sx={{
          borderRadius: 'unset',
          color: 'common.white',
          fontWeight: 400,
        }}
      >
        Submit
      </Button>
    </Box>
  </Box>
);

function FooterLinks() {
  const theme = useTheme();

  return (
    <Container>
      <Box
        sx={{
          py: '50px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px',
          [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(4, 1fr) auto',
          },
        }}
      >
        {renderedFooterLinks}
        {renderGelInTouch}
      </Box>
    </Container>
  );
}

export default FooterLinks;
