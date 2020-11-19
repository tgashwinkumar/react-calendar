import React, {useState} from 'react'
import './styles/CalendarData.css'
import {isExist} from './utils/utils'
import {birthdayIcon, eventsIcon} from './utils/icons'

function CalendarData({dayProps}) {

    const {id,day,date,week,birthday,holiday} = dayProps;

    const [active, setActive] = useState(null);

    const isBirthday = isExist(birthday);
    const isHoliday = isExist(holiday);

    const isDay = date ? "day" : ""

    const calDataContain = `calData-container ${isDay} day-${day} week-${week} ${active === id ? 'selected' : ''}`
    
    return (
        <div className={calDataContain}>
            <div className="calData-date">{date}</div>
            <div className="calData-options">
                {(date) && (isBirthday) && <img alt="isBirthday?" src={birthdayIcon} />}
                {(date) && (isHoliday)  && <img alt="isHoliday?" src={eventsIcon} />}
            </div>
        </div>
        )
    }
    
    export default CalendarData
    