import React from 'react'
import moment from "moment";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Review(props) {
    const { review } = props;
    return (
        <div className="review-card">
            <Row sm={1} >
                <Col sm={1}>{review.name}</Col>
                <Col md={4} className="blockquote-footer">{moment(review.updated_at).format(
                    "MMMM Do YYYY, h:mm a"
                    )}
                </Col>
                <Col md={2}>{review.rating} stars</Col>
            </Row>
            <br></br>
            <p>{review.content}</p>
        </div>
    )
}
