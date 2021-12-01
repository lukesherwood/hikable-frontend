import React from 'react';
import moment from 'moment';
import { StarFill, Star } from 'react-bootstrap-icons';
import { Image } from 'react-bootstrap';

export default function Review(props) {
  const stars = (NumberOfStars) => {
    const array = [];
    for (let i = 0; i < NumberOfStars; i += 1) {
      array.push(<StarFill color="gold" />);
    }
    return addEmptyStars(array);
  };

  const addEmptyStars = (array) => {
    const numberEmptyStars = 5 - array.length;
    for (let i = 0; i < numberEmptyStars; i += 1) {
      array.push(<Star color="gold" />);
    }
    return array;
  };

  const { review } = props;
  return (
    <div className="review-card p-3">
      <h6><strong>{review.username}</strong></h6>
      <span className="d-inline-block">{ stars(review.rating)}</span>
      <span className="d-inline-block blockquote-footer pb-2">{moment(review.updated_at).format(
        'MMMM Do YYYY, h:mm a',
      )}
      </span>
      <p>{review.content}</p>
      {review.images.map((img) => <Image key={img} src={'https://tiny.pictures/api/demo/?width=200&source=' + img} width="200px" alt="hike img" />)}
    </div>
  );
}
