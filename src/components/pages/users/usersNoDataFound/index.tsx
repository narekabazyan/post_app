import React from 'react';
import {
  StyledNoDataFoundText,
  StyledUsersNoDataFound,
} from '@/components/pages/users/usersNoDataFound/StyledUsersNoDataFound';

const UsersNoDataFound = () => {
  return (
    <StyledUsersNoDataFound>
      <StyledNoDataFoundText>No Data Found</StyledNoDataFoundText>
    </StyledUsersNoDataFound>
  );
};

export default UsersNoDataFound;
