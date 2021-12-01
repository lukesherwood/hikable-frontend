import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserProfile(props) {
  const navigate = useNavigate();
  const { user: { username } } = props;
  return (
    <div>
      Sorry {username}, this is currently under construction...
      <div>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Go Back to Safety</button>
      </div>
    </div>

  );
}
