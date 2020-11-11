import React from 'react'
import CalendarData from './CalendarData'
import CalendarMonthDropDown from './CalendarMonthDropDown';
import CalendarYearDropDown from './CalendarYearDropDown';
import './styles/Calendar.css';

function Calendar() {

    const monthNow = new Date().getMonth();
    const yearNow = new Date().getFullYear();

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                {yearNow}
                <CalendarMonthDropDown  monthNow={monthNow}/>
                <CalendarYearDropDown yearNow={yearNow}/>
            </div>
            <div className="calendar-weekHead">
            </div>
            <div className="calendar-grid">
                <CalendarData />
            </div>
            <div className="footer">
                
            </div>
        </div>
    )
}
export default Calendar
    