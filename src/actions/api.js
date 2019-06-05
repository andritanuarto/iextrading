import { API } from './action-types';

export const marketListHandler = (data) => {
  return {
    type: API.MARKET_LIST_HANDLER,
    data
  }
};

export const companyViewHandler = (info) => {
  console.log(info);
}