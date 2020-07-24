export default (state = [], action) => {

    switch(action.type) {

    case 'LOADING_REVIEWS':
        return state

    case 'FETCH_REVIEWS':
        return action.reviews

    case 'ADD_REVIEW':
        return state.concat(action.review)

    default:
        return state 
    }
}