import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {
  static propTypes = {
    marketListHandler: PropTypes.func.isRequired,
    api: PropTypes.object.isRequired,
  };

  handleClick = () => {
    this.props.testHandler();
  }

  componentDidMount() {
    this.props.marketListHandler();
  }

  render() {
    const { api } =  this.props;

    const selectMenu = (
      <select className="select-form">
        {
          api.data.map((datum) => {
            return (<option key={datum}>{datum}</option>)
          })
        }
      </select>
    );

    return (
      <div className="page">
        {selectMenu}
        <button onClick={() => {this.handleClick()}}>Click me</button>
      </div>
    );
  }
}

export default Page;
