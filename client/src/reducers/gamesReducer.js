export default (state = [], action) => {

    switch(action.type) {

    case 'LOADING_GAMES':
        return state 

    case 'FETCH_GAMES':
        return action.games

    case 'FETCH_GAME':
        return action.game

    case 'ADD_GAME':
        return state.concat(action.game)

    case 'REMOVE_GAME':
        return state.filter(game => game.id !== action.game)

    default:
        return state 
    }
}