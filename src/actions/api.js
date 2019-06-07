import { API } from './action-types';
import axios from 'axios';
import { CONFIG } from '../config';
import { isEmpty } from 'lodash';

export const getMarketList = (marketListType) => {
  return (dispatch) => {
    return axios.get(`${CONFIG.API_IEX_END_POINT}/market/list/${marketListType}`).then((response) => {
      if (response.data.length > 0) {
        const data = response.data.map((datum) => {
          return { symbol: datum.symbol, latestPrice: datum.latestPrice };
        });
        dispatch(setMarketList(data));
        dispatch(getCompanyDetail(data[0].symbol));
      } else {
        dispatch(setMarketList([]));
        dispatch(getCompanyDetail(null));
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

    if (symbol !== null) {
      return axios.get(`${CONFIG.API_IEX_END_POINT}/${symbol}/company`).then((response) => {

        const { symbol, description } = response.data;

        if (symbol) {
          dispatch(setShowCompany({symbol, description}));
        } else {
          dispatch(setShowCompany(null));
        }

        dispatch(handleLoading(false));

      }).catch((error) => {

        console.log(error);

        dispatch(handleLoading(false));
        if (isEmpty(symbol)) {
          dispatch(handleErrorMessage('Please put a keyword'));
        } else {
          dispatch(handleErrorMessage('Cannot find the symbol'));
        }

      });
    }

    return dispatch(setShowCompany(null));
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

export const setShowCompany = (data) => {
  return {
    type: API.SET_SHOW_COMPANY,
    data
  }
}