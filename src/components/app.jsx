import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Page from '../containers/page';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" render={() => <Page />} />
      </Router>
    </Provider>
  );
}

export default App;
