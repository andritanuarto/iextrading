import { API } from './action-types';
import axios from 'axios';

export function getMarketList() {
  return (dispatch) => {
    return axios.get('https://api.iextrading.com/1.0/stock/market/list/mostactive').then((response) => {
      if (response.data.length > 0) {
        const data = response.data.map((datum) => {
          return { symbol: datum.symbol, latestPrice: datum.latestPrice };
        });
        dispatch(setMarketList(data));
        dispatch(getCompanyDetail(data[0].symbol));
      }
    }).catch((error) => {
      throw(error);
    });
  }
}

export function getCompanyDetail(symbol) {
  return (dispatch) => {
    return axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/company`).then((response) => {
      dispatch(setShowCompany(response.data));
    }).catch((error) => {
      throw(error);
    });
  }
}

export function handleSelectSymbol(symbol) {
  return (dispatch) => {
    dispatch(getCompanyDetail(symbol));
  }
}

export const setMarketList = (data) => {
  return {
    type: API.SET_MARKET_LIST,
    data
  }
};

export const setShowCompany = (data) => {
  return {
    type: API.SET_SHOW_COMPANY,
    data
  }
}