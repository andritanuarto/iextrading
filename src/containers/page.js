import { connect } from 'react-redux';
import { getMarketList, handleSelectSymbol } from '../actions/api';
import { handleSearchMode } from '../actions/ui';
import Page from '../components/page';

const mapStateToProps = (state) => {
  return {
    api: state.api
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMarketList: () => {
      dispatch(getMarketList());
    },
    handleSelectSymbol: (symbol) => {
      dispatch(handleSelectSymbol(symbol));
    },
    handleSearchMode: () => {
      dispatch(handleSearchMode());
    }
  }
};




export default connect(mapStateToProps, mapDispatchToProps)(Page);