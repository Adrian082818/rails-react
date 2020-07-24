import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

const ReviewShow = ({ review }) => {
    return (
        <div>
            <ListGroupItem>{review.content} - {review.commenter}{<br/>} </ListGroupItem>
        </div>
    )
}

export default ReviewShow