import React, { Component } from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Holidays in USA</h1>
        <Link to="/holidayslist">See all Holidays</Link>
          {this.props.children}
      </div>
    );
  }
}
