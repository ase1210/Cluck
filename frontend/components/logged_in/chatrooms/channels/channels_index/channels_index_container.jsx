import { connect } from 'react-redux';
import ChannelsIndex from './channels_index';
import { selectChannels } from '../../../../../selectors/selectors';
import { formatDate } from '../../../../../util/date_util';

const mSTP = (state, ownProps) => {
  let channels = selectChannels(state, ownProps.search);
  return ({
    channels,
    formatDate: (date) => formatDate(date)
  });
};

const mDTP = (dispatch) => ({

});

const ChannelsIndexContainer = connect(mSTP, mDTP)(ChannelsIndex);

export default ChannelsIndexContainer;