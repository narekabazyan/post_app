import React from 'react';
import styled from 'styled-components';
import { Input } from '@/components/ui';
import SelectDropdown from '@/components/ui/SelectDropdown';
import { userSortOptions } from '@/constants/userSortOptions';

const StyledUsersPageHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  min-height: 56px;
  padding: 10px 24px;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  z-index: 100;
  position: -webkit-sticky;
  position: sticky;
  top: 64px;
`;

const StyledUsersPageHeadInput = styled.div`
  max-width: 220px;
  width: 100%;
`;

const StyledUsersSort = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UsersPageHead = () => {
  return (
    <StyledUsersPageHead>
      <StyledUsersPageHeadInput>
        <Input placeholder='Search by name' />
      </StyledUsersPageHeadInput>
      <StyledUsersSort>
        <SelectDropdown
          label='Sort Name'
          name='sortName'
          options={userSortOptions}
          onChange={(e) => console.log('e')}
        />
        <SelectDropdown
          label='Sort Age'
          name='sortAge'
          options={userSortOptions}
          onChange={(e) => console.log('e')}
        />
      </StyledUsersSort>
    </StyledUsersPageHead>
  );
};

export default UsersPageHead;
