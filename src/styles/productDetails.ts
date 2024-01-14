export const productDetailsStyles = (theme: any) => {
  return {
    wrapper: { p: '12px 24px', mt: '30px' },
    title: { fontSize: '1.25rem' },
    rating: { mt: '12px' },
    price: { fontSize: '24px', fontWeight: 700, mt: '22px' },
    stock: { fontSize: '1rem', fontWeight: 700, mt: '5px' },
    descriptionWrapper: {
      borderBottom: '1px solid #858585',
      pb: '16px',
      [theme.breakpoints.up('md')]: {
        pb: '119px',
      },
    },
    description: {
      mt: '32px',
      color: '#858585',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    actionsWrapper: { mt: '48px', display: 'flex', gap: '10px' },
    actionIcon: { border: '1px solid #E8E8E8', width: '40px', height: '40px' },
  };
};
