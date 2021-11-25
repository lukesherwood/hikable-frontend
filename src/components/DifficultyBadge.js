import React from 'react';

export default function DifficultyBadge(props) {
  const { difficulty } = props;
  const badges = difficulty.map((badge) => {
    switch (badge) {
      case 'Easiest':
        return <span key={badge} className="badge badge-primary">{badge}</span>;
      case 'Easy':
        return <span key={badge} className="badge badge-success">{badge}</span>;
      case 'Hard':
        return <span key={badge} className="badge badge-warning">{badge}</span>;
      case 'Advanced':
        return <span key={badge} className="badge badge-danger">{badge}</span>;
      default:
        return null;
    }
  });
  return (
    <div className="hike-card-difficulty">
      {badges}
    </div>
  );
}
