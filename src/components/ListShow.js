import React from "react";
import Hikes from "./Hikes";

function ListShow (props) {
    const { lists, params } = props;
    if (lists) {
      let list = lists.find((l) => l.id === parseInt(params.match.params.id) );
      if (list) {
        return (
            <div className="list-item">
            <h2>{list.name}</h2>
            <p>{list.description}</p>
            <h3>Hikes:</h3>
                <Hikes hikes={list.hikes} list={list} />
            </div>
        )
      }
    }
    return <div>Sorry that list doesn't exist</div>
  }

export default ListShow;
