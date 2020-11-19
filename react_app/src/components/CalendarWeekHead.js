import React from 'react';
import './styles/CalendarWeekHead.css';
import {days} from './utils/utils'

function CalendarWeekHead() {
    return (
        <div className="weekHead-container">
            {
                days.map(day => <p className="weekHead-data" key={day.dayId}>{day.dayName.substring(0,3).toUpperCase()}</p> )
            }
        </div>
    )
}
export default CalendarWeekHead
