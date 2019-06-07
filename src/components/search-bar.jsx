import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
  };

  searchHandler = (e) => {
    if (e.key === 'Enter') {
      this.props.handleSearch(e.target.value.toLowerCase().trim());
    }
  }

  render() {
    return (
      <Fragment>
        <input
          onKeyDown={this.searchHandler}
          className="controls__text"
          type="text"
          placeholder="Search Symbol eg: aapl"
        />
      </Fragment>
    );
  }
}

export default SearchBar;
