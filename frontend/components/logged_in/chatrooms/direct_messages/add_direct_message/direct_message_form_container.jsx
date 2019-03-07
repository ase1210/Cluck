import { connect } from 'react-redux';
import DirectMessageForm from './direct_message_form';
import { fetchAllUsers } from '../../../../../actions/session_actions';

const mDTP = (dispatch) => ({
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

const DirectMessageFormContainer = connect(undefined, mDTP)(DirectMessageForm);

export default DirectMessageFormContainer;