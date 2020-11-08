import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
// import Hikes from './Hikes'

class List extends Component {

  handleClick = (event, list) => {
    this.props.deleteList(list)
  }

  render() {
    const { list } = this.props;

    return (
      <li className="list-card" id={list.id + "-list-card"}>
       <h2>{list.name}</h2>
       <Link className="btn btn-outline-primary" to={`/lists/${list.id}`}>
       More information
      </Link>
      <Button onClick={(e) => this.handleClick(e, list)} variant="outline-danger"> Delete List</Button>
       {/* <h4>by: {list.user.username}</h4>
       <p>{list.description}</p>
       <h3>Hikes:</h3>
       <ul>
         <li><Hikes hikes={list.hikes}/></li>
       </ul> */}
      </li>
    );
  }
};

export default List;