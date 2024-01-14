export const topbarStyles = {
  wrapper: (theme: any) => {
    return {
      backgroundColor: 'secondary.main',
      py: '10px',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    };
  },
  topbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'common.white',
    fontWeight: 700,
    fontSize: '0.875rem',
  },
  contacts: {
    display: 'flex',
    gap: '10px',
  },
  contact: {
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    color: 'common.white',
    fontSize: '0.875rem',
  },
  icon: {
    fontSize: '1rem',
  },
};
