import { API } from '../actions/action-types';

const initialState = {
  companies: [],
  viewedCompany: null,
  marketListType: 'mostactive'
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

    case API.HANDLE_MARKET_LIST: {
      return Object.assign({}, state, {
        marketListType: action.mode
      });
    }

    default: {
      return state;
    }
  }
}