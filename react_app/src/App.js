import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar';
import NavBar from './components/NavBar';
import ToolBar from './components/ToolBar'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Calendar/>
        <ToolBar/>
      </Router>
    </div>
  );
}

export default App;
