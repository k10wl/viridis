import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/products' }),
  endpoints: builder => ({
    getAllProducts: builder.query<void, void>({
      query() {
        return '';
      },
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
