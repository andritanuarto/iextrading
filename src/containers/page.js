import { connect } from 'react-redux';
import { getMarketList, handleSelectSymbol } from '../actions/api';
import { handleSearchMode } from '../actions/ui';
import Page from '../components/page';

const mapStateToProps = (state) => {
  return {
    api: state.api,
    ui: state.ui
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMarketList: (marketListType) => {
      dispatch(getMarketList(marketListType));
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