import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import {Link } from 'react-router-dom'

class GameLink extends Component {
    constructor() {
        super()

        this.state = {
            counter: 0
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {counter: previousState.counter + 1 }
        })
    }

    render() {
        return(

            <><Link key={this.props.game.id} to={`/games/${this.props.game.id}`}>{this.props.game.title} <br/></Link>
            <Button variant="success"
            onClick={this.handleClick}
            >
            Playthrough: {this.state.counter}
            </Button></>
        )


    }

}

export default GameLink