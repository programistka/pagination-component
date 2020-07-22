import React from "react";
import { number, func } from "prop-types";

import PaginationItem from "./PaginationItem";
import NavigationItem from "./NavigationItem";

const Pagination = (props) => {
  const numberOfPages = Math.ceil(props.itemsCount / props.itemsPerPage);

  const preparePaginationArrayForLessOrEqual3Pages = () =>
    [...Array(numberOfPages + 1).keys()].splice(1);

  const preparePaginationArrayForMoreThen3Pages = () => {
    if (props.currentPage === 1) {
      return [1, 2, 3];
    }
    if (props.currentPage > numberOfPages - 2) {
      return [numberOfPages - 2, numberOfPages - 1, numberOfPages];
    }
    return [props.currentPage - 1, props.currentPage, props.currentPage + 1];
  };

  const renderPaginationItems = () => {
    let paginationArray = [];
    if (numberOfPages <= 3) {
      paginationArray = preparePaginationArrayForLessOrEqual3Pages();
    } else {
      paginationArray = preparePaginationArrayForMoreThen3Pages();
    }

    return paginationArray.map((pageNumber) => {
      const isActivePage = pageNumber === props.currentPage;
      return (
        <PaginationItem
          key={pageNumber}
          pageNumber={pageNumber}
          isActivePage={isActivePage}
          onClick={props.onChange}
        />
      );
    });
  };

  const isFirstPage = () => props.currentPage === 1;

  const isLastPage = () => props.currentPage === numberOfPages;

  const renderPreviousNavigationItem = () => (
    <NavigationItem
      onClick={() => props.onChange(props.currentPage - 1)}
      disabled={isFirstPage()}
      label="&laquo;"
    />
  );

  const renderNextNavigationItem = () => (
    <NavigationItem
      onClick={() => props.onChange(props.currentPage + 1)}
      disabled={isLastPage()}
      label="&raquo;"
    />
  );

  return (
    <>
      {renderPreviousNavigationItem()}
      {renderPaginationItems()}
      {renderNextNavigationItem()}
    </>
  );
};

Pagination.propTypes = {
  itemsCount: number.isRequired,
  itemsPerPage: number.isRequired,
  currentPage: number.isRequired,
  onChange: func.isRequired,
};

export default Pagination;
