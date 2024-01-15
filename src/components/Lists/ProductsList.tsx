import { useState, useEffect } from 'react';
import { useFetchProductsQuery } from '@/store';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';

import ProductCard from '../Cards/ProductCard';

interface ProductsListProps {
  paginate: boolean;
}

function ProductsList({ paginate }: ProductsListProps) {
  const [page, setPage] = useState<number>(1);
  const [combinedData, setCombinedData] = useState<Array<any>>([]);
  const theme = useTheme();

  const { data, error, isLoading, isFetching } = useFetchProductsQuery({
    limit: 10,
    page,
  });

  useEffect(() => {
    if (data) {
      setCombinedData((prev) => {
        const ids = new Set(prev.map((p) => p.id));
        return [...prev, ...data.products.filter((p) => !ids.has(p.id))];
      });
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <>
      <Box
        sx={{
          [theme.breakpoints.up('md')]: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            columnGap: '30px',
          },
        }}
      >
        {combinedData.map((product: any) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.thumbnail}
            title={product.title}
            category={product.category}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </Box>

      {paginate && combinedData?.length !== data?.total ? (
        <Button
          variant='outlined'
          onClick={() => setPage(page + 1)}
          disabled={isFetching}
          sx={{ display: 'block', margin: 'auto', textTransform: 'uppercase' }}
        >
          {isFetching ? 'Loading...' : 'Load More Products'}
        </Button>
      ) : (
        ''
      )}
    </>
  );
}

export default ProductsList;
