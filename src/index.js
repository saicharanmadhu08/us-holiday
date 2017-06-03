import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import App from './components/app';
import HolidayList from './components/holiday_list';
import HolidayDetails from './components/holiday_details';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={hashHistory}>
          <Route path="/" component={App}>
              <Route path="/holidayslist" component={HolidayList}/>
              <Route path="/holidayslist/:id" component={HolidayDetails}/>
          </Route>
      </Router>
  </Provider>
  , document.querySelector('.container'));
