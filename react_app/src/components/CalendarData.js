import React from 'react'
import './styles/CalendarData.css'
import {isExist} from './utils/utils'
import cakeIcon from './images/misc/cake.svg'
import suitcaseIcon from './images/misc/suitcases.svg'

function CalendarData({dayProps}) {

    const {day,date,week,birthday,holiday} = dayProps;

    const isBirthday = isExist(birthday);
    const isHoliday = isExist(holiday);

    const calDataContain = `calData-container day day-${day} week-${week}`
    
    return (
        <div className={calDataContain}>
            <div className="calData-date">{date}</div>
            <div className="calData-options">
                {(date) && (!isBirthday) && <img alt="isBirthday?" src={cakeIcon} />}
                {(date) && (!isHoliday)  && <img alt="isHoliday?" src={suitcaseIcon} />}
            </div>
        </div>
        )
    }
    
    export default CalendarData
    