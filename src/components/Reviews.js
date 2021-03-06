import React from "react";
import CreateReviewForm from "../containers/CreateReviewForm";
import Review from "./Review";
import { useSelector} from 'react-redux'
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Reviews(props) {
  const hike = props.hike;
  const reviews = hike.reviews
  const loggedIn = useSelector((state) => state.users.user);
  let reviewsList = []
  if (reviews) {
    reviewsList = reviews.map((review) => {
      return <Review key={review.id} review={review} />;
    });
  }

    return (
      <div className="reviews-container p-4">
        <h3 className="header-theme p-2">Comments/Reviews</h3>
        <div>{reviews? reviewsList : null}</div>
        <Accordion>
          <Accordion.Toggle
            as={Button}
            variant="primary"
            className="btn-custom"
            id="toggle-new-list-form"
            eventKey="0"
          >
            Leave a Review
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            {loggedIn? (
              <CreateReviewForm hike={hike} />
            ) : (
              <div className="border p-4 text-center">
                <div> You need to be logged in to leave a review</div>
                <Link to="/signIn" className="btn btn-custom btn-sm">
                  {" "}
                  Sign In here{" "}
                </Link>
                <br/>
              </div>
            )}
          </Accordion.Collapse>
        </Accordion>
      </div>
    );
  }
