import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Hikes from './Hikes';

export default function ListShow(props) {
  const { lists } = props;
  const { id } = useParams();
  if (lists) {
    const list = lists.find((list) => list.id === parseInt(id, 10));
    if (list) {
      return (
        <div className="list-item w-100 rounded">
          <Jumbotron className="header-theme">
            <div className="display-4">{list.name}</div>
            <div className="lead font-italic">{list.description}</div>
            <div className="float-right pr-3">{list.hikes.length} Hikes</div>
            <hr className="my-4" />
          </Jumbotron>
          <div className="list-hikes-rows">
            <h3>Saved Hikes:</h3>
            <Hikes hikes={list.hikes} list={list} />
          </div>
        </div>
      );
    }
  }
  return <div>Sorry that list does not exist</div>;
}
