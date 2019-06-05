import { connect } from 'react-redux';
import { marketListHandler } from '../actions/api';
import { testHandler } from '../actions/ui';
import Page from '../components/page';
import axios from 'axios';

const mapStateToProps = (state) => {
  return {
    ui: state.ui,
    api: state.api
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    testHandler: () => {
      dispatch(testHandler());
    },

    marketListHandler: () => {
      const iexapiurl = 'https://api.iextrading.com/1.0/stock/market/list/gainers?displayPercent=true'
      axios.get(iexapiurl).then(response => {
        const data = response.data.map((datum) => {
          return datum.symbol;
        })
        dispatch(marketListHandler(data));
      }).catch((error) => {
        throw(error);
      });
    }
  }
};




export default connect(mapStateToProps, mapDispatchToProps)(Page);