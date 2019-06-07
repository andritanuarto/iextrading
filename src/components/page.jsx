import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CompanyDetail from './company-detail';
import SearchBar from '../containers/search-bar';
import Loading from './loading';

class Page extends Component {
  static propTypes = {
    getMarketList: PropTypes.func.isRequired,
    handleSelectSymbol: PropTypes.func.isRequired,
    handleSearchMode: PropTypes.func.isRequired,
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
  }

  searchModeHandler = () => {
    this.props.handleSearchMode();
  }

  render() {
    const { api, ui } =  this.props;
    const { companies, viewedCompany, isLoading } = api;
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

    const selectMarketListDropdown = (
      <select className="controls__select" onChange={this.marketListHandler}>
        <option value="mostactive">Most Active</option>
        <option value="gainers">Gainers</option>
        <option value="losers">Losers</option>
        <option value="iexvolume">IEX Volume</option>
        <option value="iexpercent">IEX Percent</option>
        <option value="infocus">In Focus</option>
      </select>
    )

    const selectSymbolDropdown = (
      <select className="controls__select" onChange={this.selectSymbolHandler}>
        {
          companies.map(({symbol}) => {
            return (
              <option key={symbol}>{symbol}</option>
            )
          })
        }
      </select>
    );

    const selects = (
      <Fragment>
        {selectMarketListDropdown}
        {selectSymbolDropdown}
        <button className="controls__btn" onClick={this.searchModeHandler}>
          Search Symbol
        </button>
      </Fragment>
    );

    const backToDefaultBtn = (
      <button className="controls__btn" onClick={this.backToDefaultHandler}>
        Back
      </button>
    )

    return (
      <div className="page">
        <div className="controls">
          {!searchMode ? selects : <SearchBar />}
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
          : null
        }
      </div>
    );
  }
}

export default Page;