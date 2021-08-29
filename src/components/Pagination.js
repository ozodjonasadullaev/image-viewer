import React from "react";
import ReactPaginate from "react-paginate";
import "../styles/PaginationStyle.css";

const Pagination = ({
  pagesNumber,
  paginationRange,
  pageRange,
  pageChangeHandle,
}) => {
  return (
    <ReactPaginate
      pageCount={pagesNumber}
      pageRangeDisplayed={pageRange}
      marginPagesDisplayed={paginationRange}
      containerClassName="pagination"
      pageClassName="liTag number"
      previousClassName="liTag prev"
      nextClassName="liTag next"
      breakClassName="liTag break"
      activeClassName="active"
      previousLabel="<--"
      nextLabel="-->"
      onPageChange={pageChangeHandle}
    ></ReactPaginate>
  );
};

export default Pagination;
