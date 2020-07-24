import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createReview } from '../actions'
import { FormControl, FormGroup } from 'react-bootstrap'


class NewReview extends Component {

    constructor(props) {
        super(props)

        this.state = {
            content: '',
            commenter: '',
            game_id: this.props.gameId
        }
    }

    handleOnChange = event => {
        console.log(event.target)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        // event.preventDefault()
        this.props.createReview(this.state)
        this.setState({
            content: '',
            commenter: ''
        })
    }

    render(){
        return (
            <div className="review-form">
                <p className="bold-text">Add Review</p>
                <form onSubmit={this.handleOnSubmit}>

                    <FormGroup>

                        <label>Review:</label>
                        <FormControl
                        type="text"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                        />
                        <br></br>

                        <label>Name: </label>
                        <FormControl
                        type="text"
                        name="commenter"
                        value={this.state.commenter}
                        onChange={this.handleOnChange}
                        />
                        <br></br>

                        <button className="btn btn-sm btn-dark" type="submit">Submit Review</button>

                    </FormGroup>

                </form>
            </div>
        )
    }
}

export default connect(null, { createReview })(NewReview)