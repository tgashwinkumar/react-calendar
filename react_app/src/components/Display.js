import React, { useContext} from 'react'
import './styles/Display.css'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import { DateContext } from '../App'
import TimeZone from './TimeZone'
import TodoList from './TodoList'

function Display() {

    const {dateOpt, dayOpt, yearOpt, monthOpt} = useContext(DateContext);
    const [dateOptVal, ] = dateOpt
    const [yearOptVal, ] = yearOpt
    const [monthOptVal, ] = monthOpt
    const [dayOptVal, ] = dayOpt
    
    return (
        <div className="display-container">
            <Router>
                <Switch>
                    <Route path='/timezone'>
                        <TimeZone/>
                    </Route>
                    <Route path='/todolist'>
                        <TodoList/>
                    </Route>
                    <Route path="/weather">
                        <p>{dateOptVal}-{monthOptVal + 1}-{yearOptVal}, {dayOptVal}</p>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Display