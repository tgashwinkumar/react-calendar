import React, { useContext, useState } from 'react'
import CalendarData from './CalendarData';
import CalendarMonthDropDown from './CalendarMonthDropDown';
import CalendarWeekHead from './CalendarWeekHead';
import CalendarYearDropDown from './CalendarYearDropDown';
import './styles/Calendar.css';
import {sampleDays} from './utils/utils'
import {DateContext} from '../App'

export const DateSelectedContext = React.createContext();

const getTodayDateId = (dateArray) => {
    const dateNow = new Date().getDate();
    for(var dateProps in dateArray){
        if(dateProps?.date === dateNow){
            return dateProps?.id;
        }
    }
}

function Calendar() {

    const [monthOpt, ] = useContext(DateContext).monthOpt;
    const [yearOpt, ] = useContext(DateContext).yearOpt;

    return (
        <div className="calendar-container">
            <div className="calendar-header"></div>
            <div className="calendar-options">
                <CalendarMonthDropDown monthNow={monthOpt}/>
                <CalendarYearDropDown yearNow={yearOpt}/>
            </div>
            <CalendarWeekHead/>
            <DateSelectedContext.Provider value={useState(null)}>
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
    