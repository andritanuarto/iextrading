import { connect } from 'react-redux';
import { marketListHandler, companyViewHandler } from '../actions/api';
import Page from '../components/page';
import axios from 'axios';

const mapStateToProps = (state) => {
  return {
    api: state.api
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    marketListHandler: () => {
      const iexapiurl = 'https://api.iextrading.com/1.0/stock/market/list/gainers';
      axios.get(iexapiurl).then(response => {
        if (response.data.length > 0) {
          const data = response.data.map((datum) => {
            return {symbol: datum.symbol, latestPrice: datum.symbol};
          });
          dispatch(marketListHandler(data));
        }
      }).catch((error) => {
        throw(error);
      });
    },
  }
};




export default connect(mapStateToProps, mapDispatchToProps)(Page);