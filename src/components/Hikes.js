import React, { Component } from 'react';
import Hike from './Hike'

class Hikes extends Component {
    render() {
        const { hikes } = this.props;
        const hikeList = hikes.map(hike => {
          return (
            <Hike
                key={hike.id}
                hike={hike}
            />
          )
        });
      
        return(
          <ul className="cards">
            {hikeList}
          </ul>
        );
      }
      };

export default Hikes;