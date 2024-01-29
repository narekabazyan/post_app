import Post from '@/types/post';
import { api } from '@/services/rtkBase';

const postApi = api
  .enhanceEndpoints({
    addTagTypes: ['getPosts'],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getPosts: build.query<Post[], void>({
        query: () => ({ url: 'posts?_limit=20&_sort=id&_order=desc' }),
        providesTags: ['getPosts'],
      }),
      createPost: build.mutation<void, Post>({
        query: (body) => ({
          body,
          method: 'POST',
          url: 'posts',
        }),
        invalidatesTags: ['getPosts'],
      }),
    }),
  });

export const { useGetPostsQuery, useCreatePostMutation } = postApi;
