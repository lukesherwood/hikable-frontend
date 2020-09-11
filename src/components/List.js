import React, { Component } from 'react';

class List extends Component {


  render() {
    const { list } = this.props;

    return (
      <li className="list-card card" id={list.id + "-list-card"}>
       {list.name}
      </li>
    );
  }
};

export default List;