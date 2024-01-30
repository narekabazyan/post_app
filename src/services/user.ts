import { User, UsersQueryFilter } from '@/types/user';
import { api } from '@/services/rtkBase';
import { usersQueryBuilder } from '@/utils/helpers/usersQueryBuilder';
import { Network } from '@/constants/network';

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], UsersQueryFilter>({
      query: (filter: UsersQueryFilter) => {
        const query: string = usersQueryBuilder(filter);
        return {
          url: `${Network.Users}${query}`,
        };
      },
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
