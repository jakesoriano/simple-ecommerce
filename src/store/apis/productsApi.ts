import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Config {
  limit: number;
  category?: string;
  page?: number;
}

interface ProductsResponse<T> {
  limit: number;
  total: number;
  products: T[];
}

const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  endpoints: (builder) => ({
    fetchProducts: builder.query<ProductsResponse<any>, Config | void>({
      query: ({ limit, category, page = 1 }: Config) => {
        const url = `/products/${
          category ? `category/${category}` : ''
        }?limit=${limit}&skip=${(page - 1) * limit}`;

        return {
          url,
          params: { category },
          method: 'GET',
        };
      },
    }),
    fetchProduct: builder.query<any, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useFetchProductsQuery, useFetchProductQuery } = productsApi;
export { productsApi };
