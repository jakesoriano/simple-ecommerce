import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { formatCurrecy, calculateDiscount } from '@/helpers/utility';
import { productDetailsStyles } from '@/styles/productDetails';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToWishList } from '@/store';

function ProductDetails({ product }: any) {
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [alertSeverity, setAlertSeverity] = useState<any>('success');
  const theme = useTheme();
  const style = productDetailsStyles(theme);

  const colors: string[] = [
    'primary.main',
    'secondary.main',
    '#E77C40',
    'text.primary',
  ];

  const { id, title, rating, price, discountPercentage, stock, description } =
    product;

  const isWishListItem = useSelector((state: any) => {
    return state.wishlist.items.findIndex((item: any) => item.id === id) !== -1;
  });

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAlertMessage('Item added to cart!');
    setOpenAlert(true);
  };

  const handleAddToWishList = () => {
    if (!isWishListItem) {
      dispatch(addToWishList(product));
      setAlertMessage('Item saved to wishlist.');
      setOpenAlert(true);
      return;
    }

    setAlertMessage('Item already in wishlist.');
    setOpenAlert(true);
    setAlertSeverity('error');
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
    setTimeout(() => {
      setAlertMessage('');
      setAlertSeverity('success');
    }, 300);
  };

  return (
    <Box sx={style.wrapper}>
      <Typography variant='h4' sx={style.title}>
        {title}
      </Typography>

      <Rating
        value={rating}
        name='read-only'
        readOnly
        precision={0.5}
        sx={style.rating}
      />

      <Typography variant='h5' sx={style.price}>
        {formatCurrecy(calculateDiscount(price, discountPercentage))}
      </Typography>

      <Typography variant='h6' sx={style.stock}>
        Availability :{' '}
        <Typography component='span' color='primary' sx={style.stock}>
          {stock ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </Typography>

      <Box sx={style.descriptionWrapper}>
        <Typography sx={style.description}>{description}</Typography>
      </Box>

      <Box sx={{ mt: '18px', display: 'flex', gap: '10px' }}>
        {colors.map((color, index) => {
          return (
            <Box
              key={index}
              sx={{
                backgroundColor: color,
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            />
          );
        })}
      </Box>

      <Box sx={style.actionsWrapper}>
        <Button
          variant='contained'
          disableElevation
          sx={{ color: 'common.white' }}
        >
          Select Options
        </Button>

        <IconButton sx={style.actionIcon} onClick={handleAddToWishList}>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton sx={style.actionIcon} onClick={handleAddToCart}>
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton sx={style.actionIcon}>
          <VisibilityIcon />
        </IconButton>
      </Box>

      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alertSeverity}
          sx={{ width: '100%' }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ProductDetails;
