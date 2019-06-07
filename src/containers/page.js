import { connect } from 'react-redux';
import { getMarketList, handleSelectSymbol, handleErrorMessage } from '../actions/api';
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
    },
    handleErrorMessage: (keyword) => {
      dispatch(handleErrorMessage(keyword));
    },
    handleResetError: () => {
      dispatch(handleResetError());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);