export const productPageStyles = (theme: any) => {
  return {
    productDetailsWrap: {
      py: '24px',
      [theme.breakpoints.up('md')]: {
        backgroundColor: '#FAFAFA',
      },
    },
    productDetails: {
      py: '48px',
      [theme.breakpoints.up('md')]: {
        py: '34px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '30px',
      },
    },
    breadcrumb: {
      fontSize: '0.875rem',
      fontWeight: 700,
    },
    productDescriptionWrap: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
    bestSellerWrap: {
      backgroundColor: '#FAFAFA',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    partnersWrap: {
      py: '110px',
      backgroundColor: '#FAFAFA',
      [theme.breakpoints.up('md')]: {
        py: '48px',
      },
    },
  };
};
