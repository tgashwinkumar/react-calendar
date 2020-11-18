import React, { useEffect } from 'react'
import './styles/Display.css'
import './styles/timezone.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function Display() {

    useEffect(()=>{

    },[])

    return (
        <div className="display-container">
            <Router>
                <Switch>
                    <Route path='/timezone'>
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
                    <Route path='/weather'>
                        fjhg
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Display