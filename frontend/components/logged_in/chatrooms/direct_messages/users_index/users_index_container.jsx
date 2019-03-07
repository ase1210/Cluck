import { connect } from 'react-redux';
import UsersIndex from './users_index';

const mSTP = (state) => {

};

const mDTP = (dispatch) => ({
});

const UsersIndexContainer = connect(mSTP, mDTP)(UsersIndex);

export default UsersIndexContainer;