import React, { useContext, useEffect } from 'react'
import './styles/Display.css'
import './styles/timezone.css'
import './styles/todolist.css'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import { DateContext } from '../App'

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
                    <Route path='/home/timezone'>
                        <div class = "Timezone">
                            <div class="Date">NOV 18 , Wednesday</div>
                            <div class="time">09 : 41 : 25</div>
                            <div class="CurrTimezone">You are currently in India</div>
                            <select class="DropTimezone">
                                <option value="china">China</option>
                                <option value="australia">Australia</option>
                            </select>
                        </div>
                    </Route>
                    <Route path='/home/todolist'>
                        <div id = "container">
                            <h1>To Do List<i class="fa fa-plus"></i></h1>
                            <input type="text" placeholder="Add New Todo"></input>
                            <ul>
                                <li><span><i class="fa fa-trash"></i></span> Go To Potions Class</li>
                                <li><span><i class="fa fa-trash"></i></span> Buy New Robes</li>
                                <li><span><i class="fa fa-trash"></i></span> Visit Hagrid</li>
                            </ul>
                        </div>
                    </Route>
                    <Route path="/home/weather">
                        <p>{dateOptVal}-{monthOptVal + 1}-{yearOptVal}, {dayOptVal}</p>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Display