import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { useDispatch } from 'react-redux';
import { removeFromWishList } from '@/store';
import { wishListStyles } from '@/styles/wishList';

interface WishListItemProps {
  item: any;
}

function WishListItem({ item }: WishListItemProps) {
  const dispatch = useDispatch();
  const style = wishListStyles;

  const handleRemoveClick = (id: number) => {
    dispatch(removeFromWishList(id));
  };

  return (
    <Box key={item.id} sx={style.itemWrapper}>
      <Box sx={style.itemImageWrapper}>
        <Link href={`/product/${item.id}`}>
          <Image
            src={item.thumbnail}
            alt={item.title}
            quality={100}
            fill={true}
          />
        </Link>
      </Box>
      <Box sx={style.contentWrapper}>
        <Box sx={{ flex: 1 }}>
          <Link href={`/product/${item.id}`}>
            <Typography sx={style.contentTitle}>{item.title}</Typography>
          </Link>
          <Typography sx={style.contentCategory}>{item.brand}</Typography>
        </Box>
        <Box sx={style.contentAction}>
          <Typography
            sx={style.removeButton}
            onClick={() => handleRemoveClick(item.id)}
          >
            Remove
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default WishListItem;
