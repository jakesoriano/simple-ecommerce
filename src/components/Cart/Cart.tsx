import React from 'react';

import CartItem from '@/components/Cart/CartItem';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector((state: any) => state.cart.items);

  const renderedCartItems = cartItems.map((item: any) => {
    return <CartItem item={item} key={item.id} />;
  });

  if (!cartItems.length) {
    return <Typography>No items in cart.</Typography>;
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      {renderedCartItems}
    </Box>
  );
}

export default Cart;
