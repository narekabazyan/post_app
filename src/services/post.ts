import Post from '@/types/post';
import { api } from '@/services/rtkBase';
import { Network } from '@/constants/network';

const postApi = api
  .enhanceEndpoints({
    addTagTypes: ['getPosts'],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getPosts: build.query<Post[], void>({
        query: () => ({
          url: `${Network.Posts}?_sort=id&_order=desc&_limit=20`,
        }),
        providesTags: ['getPosts'],
      }),
      createPost: build.mutation<void, Post>({
        query: (body) => ({
          body,
          method: 'POST',
          url: Network.Posts,
        }),
        invalidatesTags: ['getPosts'],
      }),
    }),
  });

export const { useGetPostsQuery, useCreatePostMutation } = postApi;
