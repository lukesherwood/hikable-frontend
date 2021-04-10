import React from 'react'
import Pagination from "react-bootstrap/Pagination";

export default function PaginationComponent(props) {

    let page = props.page
    let pages = props.pages
    let items = [];
    for (let number = page; number <= (page + 4) && number < pages; number++) {
      items.push(
        <Pagination.Item onClick={() => props.fetchData(number)} key={"pageFilter"+ number} active={number === page}>
          {number}
        </Pagination.Item>
      );
    }

    return (
        <div>
          <Pagination className="justify-content-center">
            <Pagination.First disabled={page === 1 ? true : false} onClick={() => props.fetchData(1)}/>
            <Pagination.Prev disabled={page === 1 ? true : false} onClick={() => props.fetchData(page - 1)}/>
            {items}
            <Pagination.Ellipsis />
            <Pagination.Item onClick={() => props.fetchData(pages)}>{pages}</Pagination.Item>
            <Pagination.Next disabled={page === pages ? true : false} onClick={() => props.fetchData(page + 1)}/>
            <Pagination.Last disabled={page === pages ? true : false} onClick={() => props.fetchData(pages)}/>
          </Pagination>
          <br />
        </div>
    )
}
