import React, { Component } from 'react';
import Hikes from './Hikes'

class List extends Component {


  render() {
    const { list } = this.props;

    return (
      <li className="list-card" id={list.id + "-list-card"}>
       <h3>{list.name}</h3>
       <h4>by: {list.user.username}</h4>
       <p>{list.description}</p>
       <ul>
         <li><Hikes hikes={list.hikes}/></li>
       </ul>
      </li>
    );
  }
};

export default List;