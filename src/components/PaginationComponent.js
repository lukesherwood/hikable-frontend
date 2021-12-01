import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default function PaginationComponent(props) {
  const { fetchData } = props;
  const [jumpToTop, setJumpToTop] = useState(false);
  useEffect(() => {
    if (jumpToTop === true) {
      window.scrollTo(0, 0);
      setJumpToTop(false);
    }
  }, [jumpToTop]);
  const handleClick = (page) => {
    setJumpToTop(true);
    fetchData(filterData, page);
  };

  const { currentPage, totalPages, filterData } = props;
  const items = [];
  for (
    let number = currentPage;
    number <= currentPage + 4 && number < totalPages;
    number += 1
  ) {
    items.push(
      <Pagination.Item
        onClick={() => handleClick(number)}
        key={'pageFilter' + number}
        active={number === currentPage}
      >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      <Pagination className="justify-content-center">
        <Pagination.First
          disabled={currentPage === 1}
          onClick={() => handleClick(1)}
        />
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => handleClick(currentPage - 1)}
        />
        {items}
        <Pagination.Ellipsis />
        <Pagination.Item onClick={() => handleClick(totalPages)}>
          {totalPages}
        </Pagination.Item>
        <Pagination.Next
          disabled={currentPage === totalPages}
          onClick={() => handleClick(currentPage + 1)}
        />
        <Pagination.Last
          disabled={currentPage === totalPages}
          onClick={() => handleClick(totalPages)}
        />
      </Pagination>
      <br />
    </div>
  );
}
