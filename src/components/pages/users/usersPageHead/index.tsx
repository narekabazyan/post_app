import React, { FC, useState } from 'react';
import { UsersQueryFilter } from '@/types/user';
import { Input, SelectDropdown } from '@/components/ui';
import { UserSortOptions } from '@/constants/userSortOptions';
import {
  StyledUsersPageHead,
  StyledUsersPageHeadInput,
  StyledUsersSort,
} from '@/components/pages/users/usersPageHead/StyledUsersPageHead';
import { InitialPage } from '@/constants/config';
import { SortEnum } from '@/enums/sortEnum';

interface UsersPageHeadProps {
  usersQueryFilter: UsersQueryFilter;
  setUsersQueryFilter: (usersQueryFilter: UsersQueryFilter) => void;
  debouncedSaveQueryFilter: (usersQueryFilter: UsersQueryFilter) => void;
}

const UsersPageHead: FC<UsersPageHeadProps> = ({
  setUsersQueryFilter,
  usersQueryFilter,
  debouncedSaveQueryFilter,
}) => {
  const [nameSearchValue, setNameSearchInputValue] = useState('');

  const handleChangeNameSort = (value: SortEnum) => {
    setUsersQueryFilter({
      ...usersQueryFilter,
      nameSort: value,
      ageSort: SortEnum.NONE,
      pageNumber: InitialPage,
    });
  };

  const handleChangeAgeSort = (value: SortEnum) => {
    setUsersQueryFilter({
      ...usersQueryFilter,
      ageSort: value,
      nameSort: SortEnum.NONE,
      pageNumber: InitialPage,
    });
  };

  const handleChangeNameSearch = (value: string) => {
    setNameSearchInputValue(value);

    debouncedSaveQueryFilter({
      ...usersQueryFilter,
      nameSearch: nameSearchValue,
      pageNumber: InitialPage,
    });
  }

  return (
    <StyledUsersPageHead>
      <StyledUsersPageHeadInput>
        <Input
          value={nameSearchValue}
          onChange={(e) => handleChangeNameSearch(e.target.value)}
          placeholder='Search by name'
        />
      </StyledUsersPageHeadInput>
      <StyledUsersSort>
        <SelectDropdown
          label='Sort Name'
          name='sortName'
          value={usersQueryFilter.nameSort}
          options={UserSortOptions}
          onChange={(e) => handleChangeNameSort(e.target.value as SortEnum)}
        />
        <SelectDropdown
          label='Sort Age'
          name='sortAge'
          value={usersQueryFilter.ageSort}
          options={UserSortOptions}
          onChange={(e) => handleChangeAgeSort(e.target.value as SortEnum)}
        />
      </StyledUsersSort>
    </StyledUsersPageHead>
  );
};

export default UsersPageHead;
