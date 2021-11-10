import React from 'react'
import { useNavigate } from "react-router-dom";

export default function UserProfile(props) {
    const navigate = useNavigate();
    return (
        <div>
            Sorry {props.user.username}, this is currently under construction...
            <div>
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>Go Back to Safety</button>
            </div>
        </div>
     
    )
}
