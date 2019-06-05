import { UI } from '../actions/action-types';

const initialState = {
  test: true,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UI.TEST_HANDLER: {
      return Object.assign({}, state, {
        test: !state.test
      });
    }

    default: {
      return state;
    }
  }
}