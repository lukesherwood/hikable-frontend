import React from 'react'
import moment from "moment";
import {StarFill} from 'react-bootstrap-icons'
import {Image} from 'react-bootstrap'

export default function Review(props) {
    const stars = (stars) => {
        let array = []
        for (let i = 0; i < stars; i++) {
            array.push(<StarFill color="gold"/>)
        }
        return array
    }

    // if (review.images) {
    //     reviewImgs = review.images.map((img) => {
    //       return <Image key={review.id} review={review} />;
    //     });
    //   }
    const { review } = props;
    return (
        <div className="review-card pb-2">
                <h6><strong>{review.username}</strong></h6>
                <span className='d-inline-block'>{ stars(review.rating)}</span>
                <span className="d-inline-block blockquote-footer pb-2">{moment(review.updated_at).format(
                    "MMMM Do YYYY, h:mm a"
                    )}</span>
            <p>{review.content}</p>
            {review.images.map((img, i) => <Image key={i + "-hike-img"} src={img} width="200px" alt='hike img'/>)}
        </div>
    )
}
