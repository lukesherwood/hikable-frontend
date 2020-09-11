import React, { Component } from 'react';
import List from "./List"

class Lists extends Component {
    render() {
        const { lists } = this.props;
        const listsArray = lists.map(list => {
          return (
            <List
                key={list.id}
                list={list}
            />
          )
        });
      
        return(
          <ul className="cards">
            {listsArray}
          </ul>
        );
      }
      };

export default Lists;