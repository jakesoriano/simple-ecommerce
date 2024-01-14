import React from 'react';
import WishListItem from './WishListItem';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux';

function WishList() {
  const wishListItems = useSelector((state: any) => state.wishlist.items);

  const renderedWishListItems = wishListItems.map((item: any) => {
    return <WishListItem key={item.id} item={item} />;
  });

  if (!wishListItems.length) {
    return <Typography>No items in wishist.</Typography>;
  }
  return <Box>{renderedWishListItems}</Box>;
}

export default WishList;
