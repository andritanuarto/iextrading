import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'svg-inline-react';
import { SVG } from '../svg';
import CompanyDetail from '../containers/company-detail';
import SearchBar from '../containers/search-bar';

class Page extends Component {
  static propTypes = {
    getMarketList: PropTypes.func.isRequired,
    handleSelectSymbol: PropTypes.func.isRequired,
    handleSearchMode: PropTypes.func.isRequired,
    handleErrorMessage: PropTypes.func.isRequired,
    api: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired,
  };

  componentDidMount() {
    if (this.props.api.marketListType) {
      this.props.getMarketList(this.props.api.marketListType);
    }
  }

  marketListHandler = (e) => {
    this.props.getMarketList(e.target.value);
  }

  selectSymbolHandler = (e) => {
    this.props.handleSelectSymbol(e.target.value);
  }

  backToDefaultHandler = () => {
    this.props.getMarketList(this.props.api.marketListType);
    this.props.handleSearchMode();
    this.props.handleErrorMessage(null);
  }

  searchModeHandler = () => {
    this.props.handleSearchMode();
  }

  render() {
    const { api, ui } =  this.props;
    const { companies, viewedCompany, isLoading, marketListType } = api;
    const { searchMode } = ui;

    let companyWithStockPrice = companies.length > 0 && viewedCompany !== null
      ?
        companies.find((company) => {
          if (company.symbol === viewedCompany.symbol) {
            return company;
          }

          return null
        })
      : null;

    const marketListTypes = [
      {label: 'In Focus', value: 'infocus'},
      {label: 'Most Active', value: 'mostactive'},
      {label: 'Gainers', value: 'gainers'},
      {label: 'Losers', value: 'losers'},
      {label: 'IEX Volume', value: 'iexvolume'},
    ];

    const selectMarketListDropdown = (
      <select defaultValue={marketListType} className="controls__select" onChange={this.marketListHandler}>
        {marketListTypes.map((type) => {
          return (
            <option key={type.value}>{type.label}</option>
          );
        })}
      </select>
    );

    const selectSymbolDropdown = viewedCompany ? (
      <select defaultValue={viewedCompany.symbol} className="controls__select" onChange={this.selectSymbolHandler}>
        {
          companies.map(({symbol}) => {
            return (
              <option key={symbol}>{symbol}</option>
            )
          })
        }
        {companies.length === 0 ? <option>Symbols are not available at the moment</option> : null}
      </select>
    ) : null;

    const selects = (
      <Fragment>
        {selectMarketListDropdown}
        {selectSymbolDropdown}
      </Fragment>
    );

    const backToDefaultBtn = (
      <button className="controls__btn" onClick={this.backToDefaultHandler}>
        Back
      </button>
    );

    const searchStockSymbolBtn = (
      <button className="controls__btn" onClick={this.searchModeHandler}>
        Search Stock Symbol
      </button>
    );

    return (
      <div className="page">
        <div className="controls">
          <InlineSVG
            className={searchMode ? 'iex-logo iex-logo-pointed' : 'iex-logo'}
            onClick={searchMode ? this.backToDefaultHandler : null}
            src={SVG.SVG_IEX_LOGO}
            raw width="25"
            height="25"
          />
          {!searchMode ? selects : <SearchBar />}
          <div className="controls__separator" />
          {!searchMode ? searchStockSymbolBtn : null}
          {searchMode ? backToDefaultBtn : null}
        </div>
        {viewedCompany ?
          <CompanyDetail
            isLoading={isLoading}
            companyInfo={{
              symbol: viewedCompany.symbol,
              latestPrice: companyWithStockPrice ? `${companyWithStockPrice.latestPrice} USD` : 'N/A',
              description: viewedCompany.description
            }}
          />
          :
            <div className="company">
              <div className="error">No info can be displayed at this time. Please check back later.</div>
            </div>
        }
      </div>
    );
  }
}

export default Page;