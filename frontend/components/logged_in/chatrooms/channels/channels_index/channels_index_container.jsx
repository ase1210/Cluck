import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';
import { selectChannels } from '../../../../../selectors/selectors';


const mSTP = (state) => {
  // debugger
  let channels = selectChannels(state);
  return ({
    channels
  });
};

const mDTP = (dispatch) => ({

});

const ChannelsIndexContainer = connect(mSTP, mDTP)(ChannelsIndex);

export default ChannelsIndexContainer;