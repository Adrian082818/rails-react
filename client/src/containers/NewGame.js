import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createGame } from '../actions'
import { FormControl, FormGroup } from 'react-bootstrap'

class NewGame extends Component {

    constructor() {
        super()

        this.state = {
            title: '',
            genre: '',
            rating: '',
            price: ''
        }
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.createGame(this.state)
        this.props.history.push('/games')
    }

    render() {
        return (
            <div className="game-form">
                <h5>Add Game </h5>
                <form onSubmit={this.handleOnSubmit}>

                    <FormGroup>

                        <label>Title: </label>
                        <FormControl 
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleOnChange}
                        />
                        <br></br>

                        <label>Genre:</label>
                        <FormControl
                        type="text"
                        name="genre"
                        value={this.state.genre}
                        onChange={this.handleOnChange}
                        />
                        <br></br>

                        <label>Rating:</label>
                        <FormControl
                        type="text"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.handleOnChange}
                        />
                        <br></br>

                        <label>Price:</label>
                        <FormControl
                        type="text"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleOnChange}
                        />
                        <br></br>

                        <button className="btn btn-sm btn-dark" type="submit">Submit Game</button>

                    </FormGroup>

                </form>
            </div>
        )
    }
}

export default connect(null, { createGame })(NewGame)