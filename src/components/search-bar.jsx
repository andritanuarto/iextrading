import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const [searchKeyword, setsearchKeyword] = useState({
    keywords: '',
  });

  const{ keywords } = searchKeyword;

  const searchHandler = (e) => {
    if (e.key === 'Enter') {
      props.handleSearch(keywords.toLowerCase().trim());
    }
  }

  const handleKeywordChange = (e) => setsearchKeyword({
    ...searchKeyword,
    keywords: e.target.value
  })

  return (
    <Fragment>
      <input
        className="controls__text"
        onKeyDown={searchHandler}
        onChange={handleKeywordChange}
        type="text"
        value={keywords}
        placeholder="Search Symbol eg: aapl"
      />
    </Fragment>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func
}

export default SearchBar;