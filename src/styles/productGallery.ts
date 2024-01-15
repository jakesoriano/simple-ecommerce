export const productGalleryStyles = {
  selectedWrap: (theme: any) => {
    return {
      position: 'relative',
      width: '100%',
      height: '277px',
      [theme.breakpoints.up('md')]: {
        height: '450px',
      },
    };
  },
  galleryWrap: {
    mt: '42px',
    display: 'flex',
    gap: '18px',
  },
  galleryItem: {
    position: 'relative',
    height: '75px',
    flexGrow: 1,
    maxWidth: '100px',
  },
};
