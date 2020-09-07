import React from 'react'

class Hikes extends React.Component {
    hikes = () => {
        if (this.props.hikes) {
            console.log(this.props, "hikes")
            return this.props.hikes.map(hike => <li key={hike.id}>{hike.title}</li>)
        }        
    }

    render (){
        return(
            <div>
                <h2>Hikes</h2>
                <ul>
                    {this.hikes()}
                </ul>
            </div>
        )
    }
}

export default Hikes
