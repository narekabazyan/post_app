import React, { FC } from 'react';
import { Input } from '@/components/ui';
import SelectDropdown from '@/components/ui/SelectDropdown';
import { userSortOptions } from '@/constants/userSortOptions';
import {
  StyledUsersPageHead,
  StyledUsersPageHeadInput,
  StyledUsersSort,
} from '@/components/pages/users/usersPageHead/StyledUsersPageHead';
import { UsersQueryFilter } from '@/components/pages/users/usersPage/UsersPage';
import { initialPage } from '@/constants/queries';

interface UsersPageHeadProps {
  usersQueryFilter: UsersQueryFilter;
  setUsersQueryFilter: (usersQueryFilter: UsersQueryFilter) => void;
}

const UsersPageHead: FC<UsersPageHeadProps> = ({
  setUsersQueryFilter,
  usersQueryFilter,
}) => {
  const handleChangeQueryFilter = (
    value: string,
    name: keyof UsersQueryFilter
  ) => {
    setUsersQueryFilter({
      ...usersQueryFilter,
      [name]: value,
      pageNumber: initialPage,
    });
  };

  return (
    <StyledUsersPageHead>
      <StyledUsersPageHeadInput>
        <Input
          value={usersQueryFilter.nameSearch}
          onChange={(e) =>
            handleChangeQueryFilter(e.target.value, 'nameSearch')
          }
          placeholder='Search by name'
        />
      </StyledUsersPageHeadInput>
      <StyledUsersSort>
        <SelectDropdown
          label='Sort Name'
          name='sortName'
          value={usersQueryFilter.nameSort}
          options={userSortOptions}
          onChange={(e) => handleChangeQueryFilter(e.target.value, 'nameSort')}
        />
        <SelectDropdown
          label='Sort Age'
          name='sortAge'
          value={usersQueryFilter.ageSort}
          options={userSortOptions}
          onChange={(e) => handleChangeQueryFilter(e.target.value, 'ageSort')}
        />
      </StyledUsersSort>
    </StyledUsersPageHead>
  );
};

export default UsersPageHead;
