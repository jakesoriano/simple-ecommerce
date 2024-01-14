import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

import ProductDescriptionImage from '@/assets/images/product-description-image.jpg';
import { productDescriptionStyles } from '@/styles/productDescription';

function ProductDescription() {
  const theme = useTheme();
  const style = productDescriptionStyles(theme);

  const description =
    'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.';

  return (
    <Box>
      <Box sx={style.navigation}>
        <Typography sx={style.navigationItem}>Description</Typography>
        <Typography sx={style.navigationItem}>
          Additional Information
        </Typography>
        <Typography sx={style.navigationItem}>
          Reviews{' '}
          <Typography
            component='span'
            color='secondary'
            sx={{ fontWeight: 700, fontSize: '0.875rem' }}
          >
            (0)
          </Typography>
        </Typography>
      </Box>
      <Box sx={style.descriptionWrap}>
        <Box sx={style.descriptionContent}>
          <Typography variant='h5' sx={{ fontWeight: 700 }}>
            the quick fox jumps over
          </Typography>
          <Typography sx={style.descriptionText}>{description}</Typography>
          <Typography sx={{ ...style.descriptionText, ...style.textHighlight }}>
            {description}
          </Typography>
          <Typography sx={style.descriptionText}>{description}</Typography>
        </Box>
        <Box
          sx={{
            flexBasis: '413px',
            position: 'relative',
            height: '372px',
            borderRadius: '5px',
            overflow: 'hidden',
          }}
        >
          <Image src={ProductDescriptionImage} alt='Product description' fill />
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDescription;
