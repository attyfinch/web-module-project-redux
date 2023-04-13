import { combineReducers } from 'redux';
import favReducer from './favReducer';
import movieReducer from './movieReducer';

export const rootReducer = combineReducers({
    movie: movieReducer,
    fav: favReducer
})


export default rootReducer;