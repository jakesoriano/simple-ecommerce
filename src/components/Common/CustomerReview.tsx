import React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useTheme } from '@mui/material';

import { customerReviewStyles } from '@/styles/customerReview';

import User from '@/assets/images/user.jpg';
import Review1 from '@/assets/images/review-1.jpg';
import Review2 from '@/assets/images/review-2.jpg';
import Review3 from '@/assets/images/review-3.jpg';
import Review4 from '@/assets/images/review-4.jpg';
import Review5 from '@/assets/images/review-5.jpg';
import Review6 from '@/assets/images/review-6.jpg';
import Review7 from '@/assets/images/review-7.jpg';
import Review8 from '@/assets/images/review-8.jpg';
import Review9 from '@/assets/images/review-9.jpg';

function CustomerReview() {
  const theme = useTheme();
  const images = [
    Review1,
    Review2,
    Review3,
    Review4,
    Review5,
    Review6,
    Review7,
    Review8,
    Review9,
  ];

  const style = customerReviewStyles(theme);

  return (
    <Box sx={style.wrapper}>
      <Box sx={style.reviewWrapper}>
        <Typography variant='h6' sx={style.title} align='center'>
          What they say about us
        </Typography>
        <Box sx={style.review}>
          <Box sx={style.userImg}>
            <Image
              src={User}
              alt='user'
              style={{ objectFit: 'cover' }}
              priority={true}
              fill
            />
          </Box>
          <Rating value={4} name='read-only' readOnly precision={0.5} />
          <Typography align='center' sx={style.reviewComment}>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </Typography>
          <Box>
            <Typography
              align='center'
              sx={{ color: 'primary.main', fontWeight: 700 }}
            >
              Regina Miles
            </Typography>
            <Typography align='center' sx={{ fontWeight: 700 }}>
              Designer
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={style.mediaWrapper}>
        {images.map((image, index) => {
          return (
            <Box key={index} sx={style.media}>
              <Image
                src={image}
                alt={`review-${index + 1}`}
                style={{ objectFit: 'cover' }}
                priority={true}
                fill
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default CustomerReview;
