import React, { Component } from 'react';

class DropDownMenu extends Component {
    handleClick = (event, list) => {
        this.props.addHikeToList(list, this.props.hike)
    }

  render() {
    const { data } = this.props;
    const listItems = data.map(item => {
        return (
        <li className="dropdown-list-item" key={item.id}>
          <button onClick={((e) => this.handleClick(e, item))}>{item.name}</button>
         </li>
        )
      });
      return(
        <ul className="dropDownMenu">Select a list
          {listItems}
        </ul>
      );
  }
};

export default DropDownMenu