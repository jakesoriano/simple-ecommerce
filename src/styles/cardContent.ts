export const cardContentStyles = {
  wrapper: (theme: any) => {
    return {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      height: '100%',
      p: '24px',
      [theme.breakpoints.up('md')]: {},
    };
  },
  bgImage: {
    zIndex: '-1',
    objectFit: 'cover' as const,
    width: '100%',
    hidden: 'auto',
  },
  description: {
    color: 'success.main',
    fontWeight: 700,
    fontSize: '0.875rem',
    mb: '5px',
  },
  title: {
    fontWeight: 700,
    fontSize: '1.5rem',
    mb: '5px',
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    fontSize: '0.875rem',
    cursor: 'pointer',
  },
};
