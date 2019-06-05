import { connect } from 'react-redux';
import { testHandler } from '../actions/ui';

import MainContainer from '../components/main-container';


const mapStateToProps = (state) => {
  return {
    ui: state.ui,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    testHandler: () => {
      dispatch(testHandler());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);