import { connect } from 'react-redux';
import AddChannelForm from './add_channel_form';


const mDTP = (dispatch) => ({
});

const AddChannelFormContainer = connect(undefined, mDTP)(AddChannelForm);

export default AddChannelFormContainer;