import React, { Component } from 'react';

class List extends Component {


  render() {
    const { list } = this.props;

    return (
      <li className="list-card" id={list.id + "-list-card"}>
       {list.description}
      </li>
    );
  }
};

export default List;