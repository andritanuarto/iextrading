import { connect } from 'react-redux';
import CompanyDetail from '../components/company-detail';

const mapStateToProps = (state) => {
  return {
    api: state.api,
  };
};

export default connect(mapStateToProps, null)(CompanyDetail);