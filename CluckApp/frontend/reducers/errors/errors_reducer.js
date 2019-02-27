import {
  combineReducers
} from 'redux';
import userErrorsReducer from './user_errors_reducer';

const errorsReducer = combineReducers({
  userErrors: userErrorsReducer,
});

export default errorsReducer;