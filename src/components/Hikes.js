import React, { Component } from 'react';
import Hike from './Hike'

class Hikes extends Component {
    render() {
        const { hikes } = this.props;
        const list = this.props.list || null
        const hikeList = hikes.map(hike => {
          return (
            <Hike
                key={hike.id}
                hike={hike}
                list={list}
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