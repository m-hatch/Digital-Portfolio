import { combineReducers } from 'redux';
import * as types from '../actions/types';
import * as init from './defaults';

// reducers
function splash(state = init.splash, action) {
  switch(action.type) {
    case types.PARALLAX:
      return Object.assign(
        {}, state, { top: action.top }
      );
    case types.SET_SPLASH_OPACITY:
      return Object.assign(
        {}, state, { opacity: action.opacity }
      );
    default:
      return state;
  }
}

function navbar(state = init.navbar, action) {
  return state;
}

// combine reducers
export default combineReducers({
  splash,
  navbar
})
