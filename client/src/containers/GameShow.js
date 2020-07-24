import React from 'react'
import { connect } from 'react-redux'
import { fetchGame } from '../actions'
import { fetchReviews } from '../actions'
import ReviewList from '../components/ReviewList'
import NewReview from '../components/NewReview'
import { ButtonGroup } from 'semantic-ui-react'
import { deleteGame } from '../actions'
import { Button } from 'react-bootstrap'
// import { ButtonGroup } from 'react-bootstrap'

class GameShow extends React.Component {

    componentDidMount() {
        this.props.fetchGame(this.props.match.params.gameId)
        this.props.fetchReviews(this.props.match.params.gameId)
    }

    render() {
        const { game, deleteGame, history } = this.props 

        // const { game, reviews } = this.props 

        return (
            <div className="game-show">
                <div className="container-fluid">
                    <h2 className="game-header">Title: {game.title}</h2>
                    {/* <div className="game-body"> */}
                        <h3><span className="bold-text">Genre:</span> {game.genre}</h3>
                        {/* <br/> */}
                        <h3><span className="bold-text">Rating:</span> {game.rating}</h3>
                        {/* <br/> */}
                        <h3><span className="bold-text">Price:</span> ${game.price}</h3>
                    {/* </div> */}
                    <div className="game-button">
                        <ButtonGroup>
                            <Button 
                            className="btn btn-sm btn-outline-dark"
                            onClick={() => deleteGame(game.id, history)}
                            >
                            Delete Game 
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div></div>
                    <ReviewList />
                    <NewReview gameId={this.props.match.params.gameId} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const game = state.games.find(game => game.id === parseInt(ownProps.match.params.gameId, 10)) || {}
    return ({
        game: game
    })
}

export default connect(mapStateToProps, { fetchReviews, fetchGame, deleteGame })(GameShow)