import { connect } from 'react-redux';
import UsersIndex from './users_index';
import { selectUsers } from '../../../../../selectors/users_selectors';

const mSTP = (state, ownProps) => {
  let users = selectUsers(state, ownProps.search);
  return {
    users
  };
};

const mDTP = (dispatch) => ({
});

const UsersIndexContainer = connect(mSTP, mDTP)(UsersIndex);

export default UsersIndexContainer;