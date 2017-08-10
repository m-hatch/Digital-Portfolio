import { combineReducers } from 'redux';
import { 
  PARALLAX, 
  SET_SPLASH_OPACITY
} from '../actions/actions';

// reducers
function splash(state = {}, action) {
  switch(action.type) {
    case PARALLAX:
      return Object.assign(
        {}, state, { top: action.position }
      );
    case SET_SPLASH_OPACITY:
      return Object.assign(
        {}, state, { opacity: action.opacity }
      );
    default:
      return state;
  }
}

// combine reducers
const reducer = combineReducers({
  splash
})

export default reducer;