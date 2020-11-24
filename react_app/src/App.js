import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Calendar from './components/Calendar';
import NavBar from './components/NavBar';
import Result from './components/Result'
import bwcBanner from './components/images/misc/bwcBanner.png'

export const DateContext = React.createContext();

function App() {

  const yearNow = new Date().getFullYear();
  const dateNow = new Date().getDate();
  const monthNow = new Date().getMonth();
  const dayNow = new Date().getDay();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/profile'>
              <NavBar/>
          </Route>
          <Route path="/login">
            hgjhjghj
          </Route>
          <Route path="/signup">
            hfdgfg
          </Route>
          <Route path="/">
            <DateContext.Provider 
              value={{
                dateOpt: useState(dateNow),
                monthOpt: useState(monthNow),
                yearOpt: useState(yearNow),
                dayOpt: useState(dayNow),
              }}>
              <NavBar/>
              <Calendar/>
              <img src={bwcBanner} alt="BrosWhoCode react-calendar" className="bwcBanner"/>
              <Result/>
            </DateContext.Provider>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
