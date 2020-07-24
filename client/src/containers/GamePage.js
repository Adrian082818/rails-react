import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchGames } from '../actions'
// import GameList from '../components/GameList'
import GameShow from './GameShow'
import SideBar from '../components/SideBar'
// import { Button } from 'react-bootstrap'

class GamesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchGames()
    }

    render() {

        const { games, match } = this.props

        return (

            <div>
                <Switch>
                    <Route exact path={match.url} render={() => (
                        <SideBar games={games} />
                    )} />
                    <Route path={`${match.url}/:gameId`} component={GameShow} />
                </Switch>
              
            </div>
        )
    }
}

export default connect(state => ({ games: state.games }), { fetchGames })(GamesContainer)