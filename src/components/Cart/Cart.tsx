import React from 'react';

import CartItem from '@/components/Cart/CartItem';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux';
import { formatCurrecy } from '@/helpers/utility';

function Cart() {
  const cartItems = useSelector((state: any) => state.cart.items);
  const cartTotalPrice = useSelector((state: any) => state.cart.totalPrice);

  const renderedCartItems = cartItems.map((item: any) => {
    return <CartItem item={item} key={item.id} />;
  });

  if (!cartItems.length) {
    return <Typography>No items in cart.</Typography>;
  }

  console.log(cartTotalPrice, 'wew');

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          mb: '12px',
        }}
      >
        {renderedCartItems}
      </Box>
      <Typography variant='h5' sx={{ fontWeight: 700, textAlign: 'right' }}>
        {formatCurrecy(cartTotalPrice)}
      </Typography>
    </>
  );
}

export default Cart;
