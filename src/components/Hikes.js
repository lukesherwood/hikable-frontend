import React from 'react'

class Hikes extends React.Component {

    componentDidMount(){
        fetch("http://localhost:3001/hikes").then(response => {
        return response.json()
      }).then(data => console.log(data))
    }

    render (){
        return(
            <div>
                <h2>Hikes</h2>
                <ul>
                    <li>This is hike 1</li>
                </ul>
            </div>
        )
    }
}

export default Hikes
