import React from 'react'
import ReviewShow from './ReviewShow'
import {connect} from 'react-redux'
import { ListGroup } from 'react-bootstrap'

 const ReviewList = ({ reviews }) => {

     const renderReviews = reviews.map(review => 
        <ReviewShow key={review.id} review={review} /> 
        )

        return (
            <div className="reviews">
                <p className="bold-text">Reviews: </p>
                <ListGroup>
                    {renderReviews}
                </ListGroup>
            </div>
        )
 }

 export default connect(state => {
     return {reviews: state.reviews}
 })(ReviewList)