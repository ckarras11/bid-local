import React, { Component } from 'react';
import TopNav from './top-nav'
import Footer from './footer';
import '../styles/App.css';
import Card from './card';
import Grid from './grid';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <TopNav />
        <Grid />
        <Footer />
      </div>
    );
  }
}

export default App;
