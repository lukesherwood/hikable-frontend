import React, { Component } from 'react';
import Hike from './Hike'

class Hikes extends Component {

    render() {
        const { hikes } = this.props;
        const hikesList = hikes.map(hike => {
        return (
            <Hike
                key={hike.id}
                hike={hike}
            />
        )
        });
    
        return(
        <ul>
            {hikesList}
        </ul>
        );
    }
    };

export default Hikes;