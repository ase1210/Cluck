import { connect } from 'react-redux';
import JoinChannelForm from './join_channel_form';

const mSTP = (state) => ({
});

const mDTP = (dispatch) => ({
});

const JoinChannelFormContainer = connect(mSTP, mDTP)(JoinChannelForm);

export default JoinChannelFormContainer;