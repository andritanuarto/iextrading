import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CompanyDetail from './company-detail';

class Page extends Component {
  static propTypes = {
    getMarketList: PropTypes.func.isRequired,
    handleSelectSymbol: PropTypes.func.isRequired,
    handleMarketList: PropTypes.func.isRequired,
    api: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired,
  };

  componentDidMount() {
    if (this.props.api.marketListType) {
      this.props.getMarketList(this.props.api.marketListType);
    }
  }

  marketListHandler = (e) => {
    this.props.handleMarketList(e.target.value);
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
            return (<option key={symbol}>{symbol}</option>)
          })
        }
      </select>
    );

    return (
      <div className="page">
        <div className="controls">
          {selectMarketListDropdown}
          {selectSymbolDropdown}
          <button className="controls__btn" onClick={this.searchModeHandler}>
            Search Symbol
          </button>
        </div>
        {viewedCompany
          ?
            <CompanyDetail
              companyInfo={{
                symbol: companyWithStockPrice.symbol,
                latestPrice: companyWithStockPrice.latestPrice,
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
