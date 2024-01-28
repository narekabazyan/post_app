import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Best way to get from env
const baseUrl = 'http://localhost:8083/';

export const api = createApi({
  reducerPath: 'data_fetching',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
});
