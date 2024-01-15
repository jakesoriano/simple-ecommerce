import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '@/store';
import { formatCurrecy, calculateDiscount } from '@/helpers/utility';

interface CartItemProps {
  item: any;
}

function CartItem({ item }: CartItemProps) {
  const [quantity, setQuantity] = useState<number>(item.quantity);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  if (quantity > 0) {
    handleUpdateQuantity(item.id);
  } else {
    handleRemoveFromCart(item.id);
  }

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;

    if (event.target.value === '' || regex.test(event.target.value)) {
      setQuantity(parseInt(event.target.value));
    }
  };

  return (
    <Box
      key={item.id}
      sx={{
        display: 'flex',
        gap: '16px',
        borderBottom: '1px solid #E5E5E5',
        pb: '16px',
      }}
    >
      <Box sx={{ position: 'relative', height: '60px', width: '80px' }}>
        <Image
          src={item.thumbnail}
          alt={item.title}
          quality={100}
          fill={true}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          width: '100%',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '0.875rem' }}>
            {item.title}
          </Typography>
          <Typography sx={{ fontSize: '0.75rem' }}>{item.brand}</Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              textAlign: 'center',
              alignItems: 'center',
              mt: '12px',
              width: '80px',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'primary.main',
                color: 'common.white',
                cursor: 'pointer',
              }}
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </Box>
            <TextField
              variant='filled'
              type='text'
              size='small'
              sx={{
                fontSize: '0.75rem',
                borderRadius: 'unset',
                height: '100%',
                '& .MuiInputBase-root': {
                  height: '100%',
                },
                '& input': {
                  textAlign: 'center',
                  padding: 'unset',
                  fontSize: '0.75rem',
                },
              }}
              value={item.quantity}
              onChange={handleQuantityChange}
            />
            <Box
              sx={{
                backgroundColor: 'primary.main',
                color: 'common.white',
                cursor: 'pointer',
              }}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flexBasis: '80px',
            textAlign: 'right',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: '0.875rem' }}>
            {formatCurrecy(
              calculateDiscount(item.price, item.discountPercentage)
            )}
          </Typography>
          <Typography
            sx={{ fontSize: '0.75rem', alignSelf: 'end', cursor: 'pointer' }}
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CartItem;
