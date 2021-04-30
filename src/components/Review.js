import React from 'react'
import moment from "moment";
import {StarFill} from 'react-bootstrap-icons'

export default function Review(props) {
    const stars = (stars) => {
        let array = []
        for (let i = 0; i < stars; i++) {
            array.push(<StarFill color="gold"/>)
        }
        return array
    }
    const { review } = props;
    return (
        <div className="review-card pb-2">
                <h6><strong>{review.username}</strong></h6>
                <span className='d-inline-block'>{ stars(review.rating)}</span>
                <span className="d-inline-block blockquote-footer pb-2">{moment(review.updated_at).format(
                    "MMMM Do YYYY, h:mm a"
                    )}</span>
            <p>{review.content}</p>
            <img src={review.images[0]} width="200px" alt='hike img'/>
        </div>
    )
}
