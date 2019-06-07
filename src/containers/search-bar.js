import { connect } from 'react-redux';
import SearchBar from '../components/search-bar';
import { handleSearch } from '../actions/api';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (keyword) => {
      dispatch(handleSearch(keyword));
    }
  }
};

export default connect(null, mapDispatchToProps)(SearchBar);