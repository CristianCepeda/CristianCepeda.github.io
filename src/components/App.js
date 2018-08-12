import React, { Component } from 'react';
import HeaderNav from './HeaderNav';

const buttonStyle = {
  margin: '0 0 0 6rem',
  padding: '0px 5px'
}
class App extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <div className="container">
          <p>Information will go here</p>
        </div>
      </div>
    );
  }
}

export default App;
