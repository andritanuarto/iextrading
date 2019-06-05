import { API } from '../actions/action-types';

const initialState = {
  data: [],
  viewed: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case API.MARKET_LIST_HANDLER: {
      return Object.assign({}, state, {
        data: action.data
      });
    }

    default: {
      return state;
    }
  }
}