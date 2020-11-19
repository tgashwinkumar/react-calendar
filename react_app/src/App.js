import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar';
import NavBar from './components/NavBar';
import Result from './components/Result'
import bwcBanner from './components/images/misc/bwcBanner.png'

function App() {

  const DateContext = React.createContext();
  const yearNow = new Date().getFullYear();
  const dateNow = new Date().getDate();
  const monthNow = new Date().getMonth();
  const dayNow = new Date().getDay();

  return (
    <div className="App">
      <Router>
        <Switch>
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
          <Route path="/profile">

          </Route>
          <Route path="/login">

          </Route>
          <Route path="/signup">

          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
