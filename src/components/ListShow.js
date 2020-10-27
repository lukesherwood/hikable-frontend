import React, { Component } from "react";
import Hikes from "./Hikes";

class ListShow extends Component {
  render() {
    const { lists, params } = this.props;
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
}

export default ListShow;
