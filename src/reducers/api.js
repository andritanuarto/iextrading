import { API } from '../actions/action-types';

const initialState = {
  companies: [],
  viewedCompany: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case API.SET_MARKET_LIST: {
      return Object.assign({}, state, {
        companies: action.data
      });
    }

    case API.SET_SHOW_COMPANY: {
      return Object.assign({}, state, {
        viewedCompany: action.data
      });
    }

    default: {
      return state;
    }
  }
}