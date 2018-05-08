import { combineReducers } from 'redux';
import { SET_LOGIN} from '../actions';

function login(state = {}, action) {
  switch(action.type) {
    case SET_LOGIN:
      return action.login;
    default:
      return state;
  }
}

const app = combineReducers({
  login
  });
  
  export default app;