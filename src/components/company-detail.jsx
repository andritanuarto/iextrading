import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompanyDetail extends Component {
  static propTypes = {
    companyInfo: PropTypes.object.isRequired,
  };

  render() {
    const { companyInfo } = this.props;
    return (
      <div className="company">
        <div className="company-detail">
          <strong>Symbol</strong>
          {companyInfo.symbol}
        </div>
        <div className="company-detail">
          <strong>Current Stock Price</strong>
          {companyInfo.latestPrice} USD
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
