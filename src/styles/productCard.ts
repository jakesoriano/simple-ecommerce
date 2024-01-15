export const productCardStyles = (theme: any) => {
  return {
    wrapper: {
      my: '30px',
      backgroundColor: 'common.white',
      [theme.breakpoints.up('md')]: {
        my: 'unset',
        mb: '24px',
      },
    },
    imageWrapper: {
      position: 'relative',
      height: '360px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: { height: '280px' },
    },
    content: { p: '25px 25px 35px' },
    title: { fontWeight: 700, fontSize: '1rem', color: 'text.primary' },
    category: {
      fontWeight: 700,
      fontSize: '0.875rem',
      color: 'text.secondary',
      my: '10px',
    },
    price: {
      fontWeight: 700,
      fontSize: '1rem',
      color: 'text.secondary',
    },
  };
};
