import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={hashHistory}>
          <IndexRoute path="/"/>
          <Route path="/" component={App}/>
      </Router>
  </Provider>
  , document.querySelector('.container'));
