import { GET_ALBUMS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return action.payload;
    default:
      return state;
  }
};
