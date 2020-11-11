import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Calendar/>
      </Router>
    </div>
  );
}

export default App;
