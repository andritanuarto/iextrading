import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainContainer extends Component {
  handleClick = () => {
    this.props.testHandler();
  }

  render() {
    const { ui } =  this.props;

    console.log(ui);
    return (
      <div className="main-container">
        <button onClick={() => {this.handleClick()}}>Click me</button>
      </div>
    );
  }
}

export default MainContainer;
