import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
require('../../style/login-page.css');

class App extends React.Component {
  render() {
    return (
      <div className="loginPage">
        <Header/>
        <div id="home-center">
          <Home />
        </div>
        <Footer/>
      </div>
    )
  }
}
export default App;
