import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material';

import { formatCurrecy } from '@/helpers/utility';
import { productCardStyles } from '@/styles/productCard';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
  stock?: number;
}

function ProductCard({
  id,
  image,
  title,
  category,
  price,
  stock,
}: ProductCardProps) {
  const theme = useTheme();
  const style = productCardStyles(theme);

  return (
    <Box sx={style.wrapper}>
      <Box sx={style.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill={true}
          style={{ objectFit: 'cover' as const }}
          sizes='100vw'
        />
        {!stock && (
          <Chip
            sx={{ zIndex: 2 }}
            label='Out of Sock'
            variant='filled'
            color='error'
          />
        )}
      </Box>
      <Box sx={style.content}>
        <Link href={`/product/${id}`}>
          <Typography sx={style.title} align='center'>
            {title}
          </Typography>
        </Link>
        <Typography sx={style.category} align='center'>
          {category}
        </Typography>
        <Typography sx={style.price} align='center'>
          {formatCurrecy(price)}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProductCard;
