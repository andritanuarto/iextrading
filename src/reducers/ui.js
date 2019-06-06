import { UI } from '../actions/action-types';

const initialState = {
  searchMode: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UI.HANDLE_SEARCH_MODE: {
      return Object.assign({}, state, {
        searchMode: !state.searchMode
      });
    }

    default: {
      return state;
    }
  }
}