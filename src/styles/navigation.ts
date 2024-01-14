export const navigationStyles = (theme: any) => {
  return {
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    toolbar: {
      py: '34px',
    },
    actionsM: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    actionsD: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
      },
    },
    actionItem: {
      cursor: 'pointer',
      margin: 'auto',
      color: 'primary.main',
    },
    actionItemM: {
      fontSize: '2.125rem',
    },
    menuWrapper: (isMenuOpen: boolean) => {
      return {
        maxHeight: !isMenuOpen ? 0 : '1000px',
        transition: 'max-height 0.3s ease-in-out',
        overflow: 'hidden',
      };
    },
    menu: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      gap: '16px',
      p: '100px 0',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    menuD: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      },
    },
    menuItemD: {
      fontSize: '0.875rem',
      fontWeight: 700,
      color: 'text.secondary',
    },
    menuItemM: {
      fontSize: '30px',
      fontWeight: '400',
    },
    bubble: {
      position: 'absolute',
      bgcolor: 'error.main',
      color: 'common.white',
      width: '20px',
      height: '20px',
      top: '-8px',
      right: '-8px',
      borderRadius: '50%',
      textAlign: 'center',
      fontSize: '0.75rem',
      p: '1.5px',
    },
  };
};
