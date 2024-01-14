import React from 'react';
import Navigation from './Common/Navigation';
import Topbar from './Common/Topbar';
import CustomDialog from './Common/CustomDialog';
import Cart from './Cart/Cart';
import WishList from './WishList/WishList';
import Footer from './Footer/Foot';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

import { useSelector } from 'react-redux';
import useDialogContext from '@/hooks/use-dialog-context';

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  const { dialogType } = useDialogContext();
  const cartQty = useSelector((state: any) => state.cart.totalQty);
  const wishListQty = useSelector((state: any) => state.wishlist.totalQty);

  return (
    <>
      <Topbar />
      <Navigation />
      <Box>{children}</Box>
      <CustomDialog title={`Cart (${cartQty})`} isOpen={dialogType === 'cart'}>
        <Cart />
      </CustomDialog>
      <CustomDialog
        title={`Wishlist (${wishListQty})`}
        isOpen={dialogType === 'wishlist'}
      >
        <WishList />
      </CustomDialog>
      <Footer />
    </>
  );
}

export default AppLayout;
