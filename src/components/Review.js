import React from 'react'
import moment from "moment";
import {StarFill} from 'react-bootstrap-icons'

export default function Review(props) {
    const stars = (stars) => {
        let array = []
        for (let i = 0; i < stars; i++) {
            console.log(stars)
            array.push(<StarFill color="gold"/>)
        }
        return array
    }
    const { review } = props;
    return (
        <div className="review-card">
                <h6><strong>{review.username}</strong></h6>
                <span className='d-inline-block'>{ stars(review.rating)}</span>
                <span className="d-inline-block blockquote-footer pb-2">{moment(review.updated_at).format(
                    "MMMM Do YYYY, h:mm a"
                    )}</span>
            <p>{review.content}</p>
        </div>
    )
}
