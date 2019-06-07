import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './loading';

class CompanyDetail extends Component {
  static propTypes = {
    companyInfo: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  render() {
    const { companyInfo, isLoading } = this.props;

    return (
      <div className="company">
        {isLoading ? <Loading/> : null}
        <div className="company-detail">
          <strong>Symbol</strong>
          {companyInfo.symbol}
        </div>
        <div className="company-detail">
          <strong>Current Stock Price</strong>
          {companyInfo.latestPrice}
        </div>
        <div className="company-detail">
          <strong>Description</strong>
          {`${companyInfo.description}`}
        </div>
      </div>
    );
  }
}

export default CompanyDetail;
