export const productDescriptionStyles = (theme: any) => {
  return {
    navigation: {
      p: '24px',
      display: 'flex',
      gap: '24px',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '1px solid #ECECEC',
    },
    navigationItem: {
      fontWeight: '700',
      color: 'text.secondary',
      fontSize: '0.875rem',
      cursor: 'pointer',
    },
    descriptionWrap: {
      display: 'flex',
      gap: '30px',
      justifyContent: 'space-between',
      p: '42px 0 48px',
    },
    descriptionContent: {
      display: 'flex',
      gap: '30px',
      flexDirection: 'column',
      flexBasis: '45%',
    },
    descriptionText: { fontSize: '0.875rem', color: 'text.secondary' },
    textHighlight: { borderLeft: '3px solid #23856D', pl: '24px' },
  };
};
