import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Error from 'next/error';

import AppLayout from '@/components/AppLayout';
import PartnerLogos from '@/components/Common/PartnerLogos';

import ProductGallery from '@/components/Product/ProductGallery';
import ProductDetails from '@/components/Product/ProductDetails';
import ProductDescription from '@/components/Product/ProductDescription';
import ProductsList from '@/components/Lists/ProductsList';
import SectionHeading from '@/components/Common/SectionHeading';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

import { useFetchProductQuery } from '@/store';
import { getQueryParam } from '@/helpers/utility';
import { productPageStyles } from '@/styles/productPage';

function Product() {
  const router = useRouter();
  const productId = getQueryParam('productId', router.query);
  const theme = useTheme();
  const style = productPageStyles(theme);

  const { data, isLoading } = useFetchProductQuery(productId);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box>
      <Box sx={style.productDetailsWrap}>
        <Container>
          <Typography sx={style.breadcrumb}>Home <Typography component='span' sx={{...style.breadcrumb, color: '#BDBDBD'}} >> Shop</Typography></Typography>
          <Box sx={style.productDetails}>
            <ProductGallery images={data?.images} />
            <ProductDetails product={data} />
          </Box>
        </Container>
      </Box>

      <Box sx={style.productDescriptionWrap}>
        <Container>
          <ProductDescription />
        </Container>
      </Box>

      <Box sx={style.bestSellerWrap}>
        <Container>
          <SectionHeading title='Best Seller Products' />
          <ProductsList paginate={false} textPosition='left' />
        </Container>
      </Box>

      <Box sx={style.partnersWrap}>
        <Container sx={{ py: '50px' }}>
          <PartnerLogos />
        </Container>
      </Box>
    </Box>
  );
}

Product.getLayout = function getLayout(page: ReactNode, pageProps: any) {
  const router = useRouter();
  const productId = getQueryParam('productId', router.query);
  return !productId ? (
    <Error statusCode={404} title='Page Not Found' />
  ) : (
    <AppLayout {...pageProps}>{page}</AppLayout>
  );
};

export default Product;
