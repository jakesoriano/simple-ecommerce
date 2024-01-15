export const wishListStyles = {
  itemWrapper: {
    display: 'flex',
    gap: '16px',
    borderBottom: '1px solid #E5E5E5',
    pb: '16px',
  },
  itemImageWrapper: { position: 'relative', height: '60px', width: '80px' },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    width: '100%',
  },
  contentTitle: { fontWeight: 700, fontSize: '0.875rem' },
  contentCategory: { fontSize: '0.75rem' },
  contentAction: {
    flexBasis: '80px',
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  removeButton: { fontSize: '0.75rem', alignSelf: 'end', cursor: 'pointer' },
};
