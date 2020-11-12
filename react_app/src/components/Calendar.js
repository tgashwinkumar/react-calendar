import React from 'react'
import CalendarData from './CalendarData';
import CalendarMonthDropDown from './CalendarMonthDropDown';
import CalendarWeekHead from './CalendarWeekHead';
import CalendarYearDropDown from './CalendarYearDropDown';
import './styles/Calendar.css';
import {sampleDays} from './utils/utils'

function Calendar() {

    const monthNow = new Date().getMonth();
    const yearNow = new Date().getFullYear();

    return (
        <div className="calendar-container">
            <div className="calendar-header"></div>
            <div className="calendar-options">
                <CalendarMonthDropDown monthNow={monthNow}/>
                <CalendarYearDropDown yearNow={yearNow}/>
            </div>
            <CalendarWeekHead/>
            <div className="calendar-grid">
                {
                    sampleDays.map(dayProps => <CalendarData dayProps={dayProps}/>)
                }
            </div>
            <div className="calendar-footer"></div>
        </div>
    )
}
export default Calendar
    