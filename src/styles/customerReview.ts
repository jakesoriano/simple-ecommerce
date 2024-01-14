export const customerReviewStyles = (theme: any) => {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '38px',
      justifyContent: 'center',
      pb: '40px',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        p: '48px',
      },
    },
    reviewWrapper: {
      p: '48px 48px 0',
      [theme.breakpoints.up('md')]: {
        flexBasis: '50%',
        p: 'unset',
        alignSelf: 'center',
      },
    },
    title: { fontSize: '1.5rem', fontWeight: 700 },
    review: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      p: '30px 35px',
    },
    userImg: {
      position: 'relative',
      height: '90px',
      width: '90px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '2px solid #BDBDBD',
    },
    reviewComment: {
      fontWeight: 700,
      fontSize: '0.875rem',
      color: 'text.secondary',
    },
    mediaWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '14px',
      pb: '48px',
      [theme.breakpoints.up('md')]: {
        flexBasis: '50%',
      },
    },
    media: {
      position: 'relative',
      height: '112px',
      [theme.breakpoints.up('md')]: {
        height: '142px',
      },
    },
  };
};
