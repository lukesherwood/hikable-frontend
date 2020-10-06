import React, { Component } from "react";
import Hikes from "./Hikes";

class ListShow extends Component {
  render() {
    const { lists, params } = this.props;
    if (lists) {
      let list = lists.find((l) => l.id === parseInt(params.match.params.id) );
      if (list) {
        return (
            <div className="list-card">
            <h2>{list.name}</h2>
            <h4>by: {list.user.username}</h4>
            <p>{list.description}</p>
            <h3>Hikes:</h3>
            <ul>
                <li>
                <Hikes hikes={list.hikes} />
                </li>
            </ul>
            </div>
        )
      }
    }
    return <div>Sorry that list doesn't exist</div>
  }
}

export default ListShow;
