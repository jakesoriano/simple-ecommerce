import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Link as MUILink } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import IconMenu from '@/assets/icons/icon-menu.svg';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useTheme } from '@mui/material';

import { useSelector } from 'react-redux';
import { navigationStyles } from '@/styles/navigation';

import useDialogContext from '@/hooks/use-dialog-context';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { setDialogType } = useDialogContext();

  const cartQty = useSelector((state: any) => state.cart.totalQty);
  const wishListQty = useSelector((state: any) => state.wishlist.totalQty);

  const theme = useTheme();
  const style = navigationStyles(theme);

  interface page {
    name: string;
    link: string;
  }

  const pages: page[] = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Product',
      link: '/shop',
    },
    {
      name: 'Price',
      link: '/',
    },
    {
      name: 'Contact',
      link: '/',
    },
  ];

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleDialog = (type: string) => {
    setDialogType(type);
  };

  return (
    <>
      <AppBar position='static' color='inherit' elevation={0}>
        <Container sx={style.toolbar}>
          <Box sx={style.wrapper}>
            <Link href='/'>
              <Typography variant='h1' sx={{ color: 'text.primary' }}>
                Bandage
              </Typography>
            </Link>
            <Box sx={style.menuD}>
              {pages.map((page) => (
                <Link key={page.name} href={page.link}>
                  <MUILink sx={style.menuItemD} component='span'>
                    {page.name}
                  </MUILink>
                </Link>
              ))}
            </Box>
            <Box sx={style.actionsD}>
              <Box sx={{ display: 'flex', cursor: 'pointer' }}>
                <PersonOutlineOutlinedIcon sx={{ color: 'primary.main' }} />
                <Typography sx={{ color: 'primary.main' }}>
                  Login / Register
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: '16px' }}>
                <SearchIcon
                  sx={{
                    ...style.actionItem,
                    color: 'primary.main',
                  }}
                />
                <Box
                  onClick={() => handleToggleDialog('cart')}
                  sx={{
                    ...style.actionItem,
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'center',
                  }}
                >
                  <ShoppingCartOutlinedIcon sx={{ color: 'primary.main' }} />
                  <Box sx={{ fontSize: '0.75rem', color: 'primary.main' }}>
                    {cartQty}
                  </Box>
                </Box>
                <Box
                  onClick={() => handleToggleDialog('wishlist')}
                  sx={{
                    ...style.actionItem,
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'center',
                  }}
                >
                  <FavoriteBorderOutlinedIcon sx={{ color: 'primary.main' }} />
                  <Box sx={{ fontSize: '0.75rem', color: 'primary.main' }}>
                    {wishListQty}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={style.actionsM}>
              <Image
                src={IconMenu}
                alt='Menu'
                onClick={handleToggleMenu}
                style={style.actionItem}
              />
            </Box>
          </Box>
          <Box sx={style.menuWrapper(isMenuOpen)}>
            <Box sx={style.menu}>
              {pages.map((page) => (
                <Link key={page.name} href={page.link}>
                  <MUILink sx={style.menuItemM} component='span'>
                    {page.name}
                  </MUILink>
                </Link>
              ))}

              <Box sx={{ mt: '36px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: '15px' }}>
                  <PersonOutlineOutlinedIcon
                    sx={{ color: 'primary.main', fontSize: '1.875rem' }}
                  />
                  <Typography
                    sx={{ color: 'primary.main', fontSize: '1.75rem' }}
                  >
                    Login / Register
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    gap: ' 30px',
                    flexDirection: 'column',
                  }}
                >
                  <SearchIcon
                    sx={{ ...style.actionItemM, ...style.actionItem }}
                  />
                  <Box
                    onClick={() => handleToggleDialog('cart')}
                    sx={{
                      ...style.actionItem,
                      display: 'flex',
                      gap: '5px',
                      alignItems: 'center',
                    }}
                  >
                    <ShoppingCartOutlinedIcon sx={style.actionItemM} />
                    <Box>{cartQty}</Box>
                  </Box>
                  <Box
                    onClick={() => handleToggleDialog('wishlist')}
                    sx={{
                      ...style.actionItem,
                      display: 'flex',
                      gap: '5px',
                      alignItems: 'center',
                    }}
                  >
                    <FavoriteBorderOutlinedIcon style={style.actionItemM} />
                    <Box>{wishListQty}</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  );
}

export default Navigation;
