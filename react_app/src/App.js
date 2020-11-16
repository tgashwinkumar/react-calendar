import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar';
import NavBar from './components/NavBar';
import ToolBar from './components/ToolBar'
import Display from './components/Display'
import bwcBanner from './components/images/misc/bwcBanner.png'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Calendar/>
        <ToolBar/>
        <img src={bwcBanner} alt="BrosWhoCode react-calendar" className="bwcBanner"/>
        <Display/>
      </Router>
    </div>
  );
}

export default App;
