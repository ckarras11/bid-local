import React, { Component } from 'react';
import TopNav from './top-nav'
import Footer from './footer';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <TopNav />
        <Footer />
      </div>
    );
  }
}

export default App;
