import { SortEnum } from '@/enums/sortEnum';
import { SelectOption } from '@/types/global';

export const UserSortOptions: SelectOption[] = [
  { label: 'None', value: SortEnum.NONE },
  { label: 'Asc', value: SortEnum.ASC },
  { label: 'Desc', value: SortEnum.DESC },
];
