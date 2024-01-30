import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseURL } from '@/constants/config';

export const api = createApi({
  reducerPath: 'data_fetching',
  baseQuery: fetchBaseQuery({ baseUrl: BaseURL }),
  endpoints: () => ({}),
});
