import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InlineSVG from 'svg-inline-react';
import { SVG } from '../svg';

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

  const searchBtnHandler = () => {
    props.handleSearch(keywords.toLowerCase().trim());
  }

  const handleKeywordChange = (e) => setsearchKeyword({
    ...searchKeyword,
    keywords: e.target.value
  })

  return (
    <div className="container container-search">
      <input
        className="controls__text controls__text-search"
        onKeyDown={searchHandler}
        onChange={handleKeywordChange}
        type="text"
        value={keywords}
        placeholder="Search Symbol eg: aapl"
      />
      <button className="controls__btn controls__btn-search" onClick={searchBtnHandler}>
        <InlineSVG src={SVG.SVG_SEARCH} raw width="15" height="15 " />
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func
}

export default SearchBar;