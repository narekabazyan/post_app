import React, { FC } from 'react';
import {
  StyledPaginationContainer,
  StyledPaginationHolder,
} from '@/components/pages/users/usersPagination/StyledUsersPagination';
import ReactPaginate from 'react-paginate';

interface UsersPaginationProps {
  currentPage: number;
  pageCount: number;
  setCurrentPage: (pageNumber: number) => void;
}

const UsersPagination: FC<UsersPaginationProps> = ({
  currentPage,
  pageCount,
  setCurrentPage,
}) => {
  return (
    <StyledPaginationHolder>
      <StyledPaginationContainer>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pageCount}
          forcePage={currentPage}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={(e: { selected: number }) => setCurrentPage(e.selected)}
          containerClassName={'pagination'}
          activeClassName={'selected'}
        />
      </StyledPaginationContainer>
    </StyledPaginationHolder>
  );
};

export default UsersPagination;
