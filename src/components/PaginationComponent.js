import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

export default function PaginationComponent(props) {
  const [jumpToTop, setJumpToTop] = useState(false);
  useEffect(() => {
    if (jumpToTop === true) {
      window.scrollTo(0, 0);
      setJumpToTop(false);
    }
  }, [jumpToTop]);
  const handleClick = (page) => {
    setJumpToTop(true);
    props.fetchData(filterData, page);
  };

  const CurrentPage = props.CurrentPage;
  const TotalPages = props.TotalPages;
  const filterData = props.filterData;
  const items = [];
  for (
    let number = CurrentPage;
    number <= CurrentPage + 4 && number < TotalPages;
    number++
  ) {
    items.push(
      <Pagination.Item
        onClick={() => handleClick(number)}
        key={"pageFilter" + number}
        active={number === CurrentPage}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination className="justify-content-center">
        <Pagination.First
          disabled={CurrentPage === 1 ? true : false}
          onClick={() => handleClick(1)}
        />
        <Pagination.Prev
          disabled={CurrentPage === 1 ? true : false}
          onClick={() => handleClick(CurrentPage - 1)}
        />
        {items}
        <Pagination.Ellipsis />
        <Pagination.Item onClick={() => handleClick(TotalPages)}>
          {TotalPages}
        </Pagination.Item>
        <Pagination.Next
          disabled={CurrentPage === TotalPages ? true : false}
          onClick={() => handleClick(CurrentPage + 1)}
        />
        <Pagination.Last
          disabled={CurrentPage === TotalPages ? true : false}
          onClick={() => handleClick(TotalPages)}
        />
      </Pagination>
      <br />
    </div>
  );
}
