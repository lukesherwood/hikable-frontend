import React from 'react';
import { useSelector } from 'react-redux';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Review from './Review';
import CreateReviewForm from '../containers/CreateReviewForm';

export default function Reviews() {
  let reviewsList = [];
  const hike = useSelector(state => state.hikes.hike);
  const { reviews } = hike;
  const loggedIn = useSelector((state) => state.users.user);
  if (reviews) {
    reviewsList = reviews.map((review) => {
      return <Review key={review.id} review={review} />;
    });
  }

  return (
    <div className="reviews-container p-4">
      <h3 className="header-theme p-2">Comments/Reviews</h3>
      <div className="p-2">{reviewsList || 'Be the first to leave a review!'}</div>
      <Accordion>
        <Accordion.Collapse eventKey="0">
          {loggedIn ? (
            <CreateReviewForm hike={hike} />
          ) : (
            <div className="border p-4 text-center">
              <div> You need to be logged in to leave a review</div>
              <Link to="/signIn" className="btn btn-custom btn-sm">
                {' '}
                Sign In here{' '}
              </Link>
            </div>
          )}
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Button}
          variant="primary"
          className="btn-custom"
          id="toggle-new-list-form"
          eventKey="0"
        >
          Leave a Review
        </Accordion.Toggle>
      </Accordion>
    </div>
  );
}
