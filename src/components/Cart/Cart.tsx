import React from 'react';

import CartItem from '@/components/Cart/CartItem';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h6' sx={{ fontWeight: 700 }}>
          Total:
        </Typography>
        <Typography variant='h6' sx={{ fontWeight: 700, textAlign: 'right' }}>
          {formatCurrecy(cartTotalPrice)}
        </Typography>
      </Box>
      <Button
        variant='contained'
        size='small'
        sx={{ color: 'common.white', float: 'right', mt: '24px' }}
      >
        Checkout
      </Button>
    </>
  );
}

export default Cart;
