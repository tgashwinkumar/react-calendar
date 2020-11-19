import React, {useContext} from 'react'
import './styles/CalendarData.css'
import {isExist} from './utils/utils'
import {birthdayIcon, eventsIcon} from './utils/icons'
import {DateSelectedContext} from './Calendar'

function CalendarData({dayProps}) {

    const {id,day,date,week,birthday,holiday} = dayProps;

    const [activeDateId, setActiveDateId] = useContext(DateSelectedContext);

    const isBirthday = isExist(birthday);
    const isHoliday = isExist(holiday);

    const isDay = date ? "day" : ""

    const calDataContain = `calData-container ${isDay} day-${day} week-${week} ${activeDateId === id ? 'selected' : ''}`
    
    return (
        <div className={calDataContain} onClick={() => setActiveDateId(id)}>
            <div className="calData-date">{date}</div>
            <div className="calData-options">
                {(date) && (isBirthday) && <img alt="isBirthday?" src={birthdayIcon} />}
                {(date) && (isHoliday)  && <img alt="isHoliday?" src={eventsIcon} />}
            </div>
        </div>
        )
    }
    
    export default CalendarData
    