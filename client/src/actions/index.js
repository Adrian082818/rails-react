const API_URL = 'http://localhost:3000/api'

const setGames = games => {
    return {
        type: 'FETCH_GAMES',
        games 
    }
}

const setGame = game => {
    return {
        type: 'FETCH_GAME',
        game
    }
}

const addGame = game => {
    return {
        type: 'ADD_GAME',
        game
    }
}

const removeGame = game => {
    return {
        type: 'REMOVE_GAME',
        game 
    }

}

const setReviews = reviews => {
    return {
        type: 'FETCH_REVIEWS',
        reviews 
    }
}

const addReview = review => {
    return {
        type: 'ADD_REVIEW',
        review 
    }
}

export const fetchGames = () => {
    return dispatch => {
        dispatch({type: 'LOADING_GAMES'})
        return fetch(`${API_URL}/games`)
        .then(response => response.json())
        .then(games => dispatch(setGames(games)))
        .catch(error => console.log(error))
    }
}

export const fetchGame = (gameId) => {
    return dispatch => {
        return fetch(`${API_URL}/games/${gameId}`)
        .then(response => response.json())
        .then(game => {
            dispatch(setGame([game]))
        })
        .catch(error => console.log(error))
    }
}

export const createGame = (game) => {
    return dispatch => {
        return fetch(`${API_URL}/games`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({game: game})
        })
        .then(response => response.json())
        .then(game => {
            dispatch(addGame(game))
        })
        .catch(error => {
            dispatch({type: 'error'})
        })
    }
}


export const deleteGame = (gameId, routerHistory) => {
    console.log(routerHistory)
    return dispatch => {
        return fetch(`${API_URL}/games/${gameId}`, {
            method: "DELETE",
        })
        .then(response => {
            dispatch(removeGame(gameId))
            routerHistory.replace('/games')
        })
        .catch(error => console.log(error))
    }
}


export const fetchReviews = (gameId) => {
    return dispatch => {
        dispatch({type: 'LOADING_REVIEWS'})
        return fetch(`${API_URL}/games/${gameId}/reviews`)
        .then(response => response.json())
        .then(reviews => dispatch(setReviews(reviews)))
        .catch(error => console.log(error))
    }
}

export const createReview = (review) => {
    return dispatch => {
        return fetch(`${API_URL}/games/${review.game_id}/reviews`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({review: review})
        })
        .then(response => response.json())
        .then(review => {
            dispatch(addReview(review))
        })
        .catch(error => {
            dispatch({type: 'error'})
        })
    }
}

