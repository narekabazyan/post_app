import { SortEnum } from '@/enums/sortEnum';

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  avatar: string;
}

export interface UsersQueryFilter {
  nameSearch: string;
  nameSort: SortEnum;
  ageSort: SortEnum;
  pageNumber: number;
}
