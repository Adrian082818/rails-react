import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer'
import reviewsReducer from './reviewsReducer'

export default combineReducers({
    games: gamesReducer,
    reviews: reviewsReducer
})