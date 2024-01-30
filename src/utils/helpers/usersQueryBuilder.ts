import { UsersQueryFilter } from '@/types/user';

export const usersQueryBuilder = (filter: UsersQueryFilter): string => {
  let queryParts: string[] = [];

  if (filter.nameSearch) {
    queryParts.push(`name_like=${filter.nameSearch}`);
  }
  if (filter.nameSort) {
    queryParts.push(`_sort=name&_order=${filter.nameSort}`);
  }
  if (filter.ageSort) {
    queryParts.push(`_sort=age&_order=${filter.ageSort}`);
  }

  return queryParts.length > 0 ? `?${queryParts.join('&')}` : '';
};
