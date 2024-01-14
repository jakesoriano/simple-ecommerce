import { useState } from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

import { productGalleryStyles } from '@/styles/productGallery';

interface ProductGalleryProps {
  images: string[];
}

function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const theme = useTheme();

  const handleSelectImage = (image: string) => {
    setSelectedImage(image);
  };

  const renderedItems = images.map((image, index) => {
    return (
      <Box
        key={index}
        sx={productGalleryStyles.galleryItem}
        onClick={() => handleSelectImage(image)}
      >
        <Image
          src={image}
          alt={`Image ${index + 1}`}
          fill={true}
          priority={true}
        />
      </Box>
    );
  });

  return (
    <Box>
      <Box sx={productGalleryStyles.selectedWrap(theme)}>
        <Image src={selectedImage} alt='title' fill={true} priority={true} />
      </Box>
      <Box sx={productGalleryStyles.galleryWrap}>{renderedItems}</Box>
    </Box>
  );
}

export default ProductGallery;
