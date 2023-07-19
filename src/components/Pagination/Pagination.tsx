import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss'

interface IPaginationProps {
  pageCount: number;
  onPageChange: (selectedPage: { selected: number }) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={'pagination'}
      activeClassName={'active'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
    />
  );
};
