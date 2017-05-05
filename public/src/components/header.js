import React from 'react';
require('../../style/header.css');

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src="../../style/logo.jpg"/>
        <h3 id="title">Nutrition Recipes App</h3>
      </div>
    );
  }
}

export default Header;


