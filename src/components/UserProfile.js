import React from 'react'
import { useHistory } from "react-router-dom";

export default function UserProfile(props) {
    let history = useHistory();
    return (
        <div>
            Sorry {props.user.username}, this is currently under construction...
            <div>
            <button className="btn btn-secondary" onClick={() => history.goBack()}>Go Back to Safety</button>
            </div>
        </div>
     
    )
}
