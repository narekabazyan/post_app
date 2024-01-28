import React, { FC } from 'react';
import Pagination from '@/components/ui/pagination/Pagination';
import { StyledPaginationHolder } from '@/components/pages/users/usersPagination/StyledUsersPagination';

interface UsersPaginationProps {
  pageCount: number;
  setCurrentPage: (pageNumber: number) => void;
}

const UsersPagination: FC<UsersPaginationProps> = ({
  pageCount,
  setCurrentPage,
}) => {
  return (
    <StyledPaginationHolder>
      <Pagination
        pageCount={pageCount}
        onPageChange={(e: { selected: number }) => setCurrentPage(e.selected)}
      />
    </StyledPaginationHolder>
  );
};

export default UsersPagination;
