import {
  combineReducers
} from 'redux';

const errorsReducer = combineReducers({
  userErrors: userErrorsReducer,
});

export default errorsReducer;