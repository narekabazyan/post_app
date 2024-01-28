import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import PaginationContainer from './StyledPagination';

interface PaginationComponentProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  pageCount,
  onPageChange,
}) => {
  useEffect(() => {
    console.log('page', pageCount);
  }, [pageCount]);
  return (
    <PaginationContainer>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'selected'}
      />
    </PaginationContainer>
  );
};

export default PaginationComponent;
