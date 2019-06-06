import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
  static propTypes = {
    getMarketList: PropTypes.func.isRequired,
    handleSelectSymbol: PropTypes.func.isRequired,
    api: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getMarketList();
  }

  selectSymbolHandler = (e) => {
    this.props.handleSelectSymbol(e.target.value);
  }

  searchModeHandler = () => {
    this.props.handleSearchMode();
  }

  render() {
    const { api } =  this.props;
    const { companies, viewedCompany } = api;

    let companyWithStockPrice = companies.length > 0 && viewedCompany !== null
      ?
        companies.find((company) => {
          if (company.symbol === viewedCompany.symbol) {
            return company;
          }

          return null
        })
      : null;

    const selectMenu = (
      <select className="controls__select" onChange={this.selectSymbolHandler}>
        {
          companies.map(({symbol}) => {
            return (<option key={symbol}>{symbol}</option>)
          })
        }
      </select>
    );

    const detail = viewedCompany ? (
      <div className="company">
        <div className="company-detail">
          <strong>Symbol</strong>
          {companyWithStockPrice.symbol}
        </div>
        <div className="company-detail">
          <strong>Current Stock Price</strong>
          {companyWithStockPrice.latestPrice} USD
        </div>
        <div className="company-detail">
          <strong>Description</strong>
          {`${viewedCompany.description}`}
        </div>
      </div>
    ) : null;

    return (
      <div className="page">
        <div className="controls">
          {selectMenu}
          <button className="controls__btn" onClick={this.searchModeHandler}>
            Search Symbol
          </button>
        </div>
        {detail}
      </div>
    );
  }
}

export default Page;
