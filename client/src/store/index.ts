import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { api } from '@/services/rtkBase';

export const store = configureStore({
  reducer: combineReducers({
    [api.reducerPath]: api.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
