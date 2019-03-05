import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";


const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

const removeMessage = (id) => ({
  type: REMOVE_MESSAGE,
  id
});

const receiveMessageErrors = (errors) => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
});

export const createMessage = (message) => dispatch => (
  MessageAPIUtil.postNewMessage(message).then(
    message => dispatch(receiveMessage(message)),
    errors => dispatch(receiveMessageErrors(errors))
  )
);

export const destroyMessage = (id) => dispatch => (
  MessageAPIUtil.deleteMessage(id).then(
    () => dispatch(removeMessage(id)),
    errors => dispatch(receiveMessageErrors(errors))
  )
);