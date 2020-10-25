import React, { Component } from 'react';
import List from "./List"
import CreateListForm from './CreateListForm'

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
          <div>
            <h2>Lists</h2>
            <ul className="cards">
              {listsArray}
            <CreateListForm currentUser={this.props.currentUser} />
            </ul>
          </div>
        );
      }
      };

export default Lists;