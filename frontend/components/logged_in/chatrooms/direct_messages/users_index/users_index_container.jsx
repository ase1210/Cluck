import { connect } from "react-redux";
import UsersIndex from "./users_index";
import { selectUsers } from "../../../../../selectors/users_selectors";
import { receiveUserSelection } from "../../../../../actions/dm_actions";

const mSTP = (state, ownProps) => {
  let users = selectUsers(state, ownProps.search);
  return {
    users
  };
};

const mDTP = dispatch => ({
  receiveUserSelection: user => dispatch(receiveUserSelection(user))
});

const UsersIndexContainer = connect(
  mSTP,
  mDTP
)(UsersIndex);

export default UsersIndexContainer;
