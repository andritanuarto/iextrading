import { API } from './action-types';
import axios from 'axios';
import { CONFIG } from '../config';

export const getMarketList = (marketListType) => {
  return (dispatch) => {
    return axios.get(`${CONFIG.API_IEX_END_POINT}/market/list/${marketListType}`).then((response) => {
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

export const getCompanyDetail = (symbol) => {
  return (dispatch) => {
    dispatch(handleLoading(true));
    dispatch(handleErrorMessage(null));
    return axios.get(`${CONFIG.API_IEX_END_POINT}/${symbol}/company`).then((response) => {
      const { symbol, description } = response.data;
      dispatch(setShowCompany({
        symbol,
        description
      }));
      dispatch(handleLoading(false));
    }).catch((error) => {
      console.log(error);
      dispatch(handleLoading(false));
      dispatch(handleErrorMessage('Cannot find the symbol that you\'re looking for'));
    });
  }
}

export const handleErrorMessage = (msg) => {
  return {
    type: API.HANDLE_ERROR_MESSAGE,
    msg
  }
}

export const handleLoading = (loadingState) => {
  return {
    type: API.HANDLE_LOADING,
    loadingState
  }
}

export const handleSelectSymbol = (symbol) => {
  return (dispatch) => {
    dispatch(getCompanyDetail(symbol));
  }
}

export const handleSearch = (keyword) => {
  return (dispatch) => {
    dispatch(getCompanyDetail(keyword));
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