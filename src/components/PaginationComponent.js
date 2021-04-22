import React, { useEffect, useState } from "react"
import Pagination from "react-bootstrap/Pagination";

export default function PaginationComponent(props) {
  const [jumpToTop, setJumpToTop] = useState(false);
  useEffect(() => {
    if(jumpToTop === true) {
      window.scrollTo(0, 0)
      setJumpToTop(false);
    }
  }, [jumpToTop])
   const handleClick = (page) => {
    setJumpToTop(true);
    props.fetchData(filterData, page)
  }

  let page = props.page;
  let pages = props.pages;
  let filterData = props.filterData
  let items = [];
  for (let number = page; number <= page + 4 && number < pages; number++) {
    items.push(
      <Pagination.Item
        onClick={() => handleClick(number)}
        key={"pageFilter" + number}
        active={number === page}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination className="justify-content-center">
        <Pagination.First
          disabled={page === 1 ? true : false}
          onClick={() => handleClick(1)}
        />
        <Pagination.Prev
          disabled={page === 1 ? true : false}
          onClick={() => handleClick(page - 1)}
        />
        {items}
        <Pagination.Ellipsis />
        <Pagination.Item onClick={() => handleClick(pages)}>
          {pages}
        </Pagination.Item>
        <Pagination.Next
          disabled={page === pages ? true : false}
          onClick={() => handleClick(page + 1)}
        />
        <Pagination.Last
          disabled={page === pages ? true : false}
          onClick={() => handleClick(pages)}
        />
      </Pagination>
      <br />
    </div>
  );
}
