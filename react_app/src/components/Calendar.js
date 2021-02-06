import React, { useContext, useState } from 'react'
import CalendarData from './CalendarData';
import CalendarMonthDropDown from './CalendarMonthDropDown';
import CalendarWeekHead from './CalendarWeekHead';
import CalendarYearDropDown from './CalendarYearDropDown';
import './styles/Calendar.css';
import {sampleDays} from './utils/utils'
import {DateContext} from '../App'

export const DateSelectedContext = React.createContext();

function Calendar() {

    const [monthOpt, ] = useContext(DateContext).monthOpt;

    const dateNow = new Date().getDate();
    const yearNow = new Date().getFullYear();

    return (
        <div className="calendar-container">
            <div className="calendar-header"></div>
            <div className="calendar-options">
                <CalendarMonthDropDown monthNow={monthOpt}/>
                <CalendarYearDropDown yearNow={yearNow}/>
            </div>
            <CalendarWeekHead/>
            <DateSelectedContext.Provider value={useState(dateNow)}>
            <div className="calendar-grid">
                {
                    sampleDays.map(dayProps => <CalendarData dayProps={dayProps} key={sampleDays.indexOf(dayProps)}/>)
                }
            </div>
            </DateSelectedContext.Provider>
            <div className="calendar-footer"></div>
        </div>
    )
}
export default Calendar
    