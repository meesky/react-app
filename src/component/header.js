import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {
  render (){
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome come to Meesky</h1>
      </div>
    )
  }
}

export default Header;
