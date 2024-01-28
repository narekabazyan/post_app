import Post from '@/types/post';
import { api } from '@/services/rtkBase';

const postApi = api
  .enhanceEndpoints({
    addTagTypes: ['getPosts'],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getPosts: build.query<Post[], void>({
        query: () => ({ url: 'posts?_limit=1' }),
        providesTags: ['getPosts'],
      }),
    }),
  });

export const { useGetPostsQuery } = postApi;
