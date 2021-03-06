import React from 'react';
import {Link} from 'react-router-dom';
import './styles/ToolBar.css';
import {eventsIcon, timeZoneIcon, weatherIcon, toDoIcon, todayInHistoryIcon, birthdayIcon} from './utils/icons'

function ToolBar() {
    
    return (
        <div className="tools">
                <Link to="/timezone" className="tools-link tools-timezone"><img alt="TimeZone" src={timeZoneIcon}/></Link>
                <Link to="/weather" className="tools-link tools-weather"><img alt="Weather" src={weatherIcon}/></Link>
                <Link to="/birthday" className="tools-link tools-birthdays"><img alt="Birthdays" src={birthdayIcon}/></Link>
                <Link to="/holiday" className="tools-link tools-events"><img alt="Events" src={eventsIcon}/></Link>
                <Link to="/todolist" className="tools-link tools-todo"><img alt="ToDo" src={toDoIcon} /></Link>
                <Link to="/history" className="tools-link tools-todayinhistory"><img alt="Today in History" src={todayInHistoryIcon}/></Link>
        </div>
        )
    }
    
    export default ToolBar