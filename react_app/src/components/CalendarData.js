import React, {useContext} from 'react'
import './styles/CalendarData.css'
import {isExist} from './utils/utils'
import {birthdayIcon, eventsIcon} from './utils/icons'
import {DateSelectedContext} from './Calendar'
import { DateContext } from '../App'

function CalendarData({dayProps}) {

    const {day,date,week,birthday,holiday} = dayProps;

    const {dateOpt, dayOpt} = useContext(DateContext);
    const [,setDateOptVal] = dateOpt;
    const [,setDayOptVal] = dayOpt;
    
    const [activeDate, setActiveDate] = useContext(DateSelectedContext);

    const isBirthday = isExist(birthday);
    const isHoliday = isExist(holiday);
    const isDay = date !== null ? "is-day" : ""

    const calDataContain = `calData-container ${isDay} day-${day} week-${week} ${activeDate === date ? 'selected' : ''}`

    return (
        <div className={calDataContain} onClick={() => {setActiveDate(date); setDateOptVal(date); setDayOptVal(day)}}>
            <div className="calData-date">{date}</div>
            <div className="calData-options">
                {(date) && (isBirthday) && <img alt="isBirthday?" src={birthdayIcon} />}
                {(date) && (isHoliday)  && <img alt="isHoliday?" src={eventsIcon} />}
            </div>
        </div>
        )
    }
    
    export default CalendarData
    