import React, { useEffect } from 'react'
import './styles/Display.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function Display() {

    useEffect(()=>{

    },[])

    return (
        <div className="display-container">
            <Router>
                <Switch>
                    <Route path='/timezone'>
                        dfhfg
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