import React from 'react';
import PropTypes from 'prop-types';
import Loading from './loading';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const CompanyDetail = (props) => {
  const { companyInfo, isLoading, api } = props;
  const { errorMessage } = api;

  const companyDetail = (
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
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
    </ReactCSSTransitionGroup>
  );

  const loadingComponent = (
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <Loading/>
    </ReactCSSTransitionGroup>
  );

  return (
    <div className="company">
      {isLoading ? loadingComponent : null}
      {errorMessage === null ?  companyDetail : <div className="error">{errorMessage}</div>}
    </div>
  );
}

CompanyDetail.propTypes = {
  companyInfo: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default CompanyDetail;
