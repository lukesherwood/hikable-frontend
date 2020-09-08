import React, { Component } from 'react';

class Hike extends Component {


  render() {
    const { hike } = this.props;

    return (
      <div>
        
        <li>
          {hike.title}
        </li>
      </div>
    );
  }
};

export default Hike;