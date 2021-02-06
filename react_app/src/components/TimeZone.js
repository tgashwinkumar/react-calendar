import React,{useState,useEffect} from 'react'
import './styles/timezone.css'
import {getDayName, getMonthName} from './utils/utils'

function TimeZone() {

    const [timeNow, setTimeNow] = useState({})

    let hour;
    let second;
    let minute;

    useEffect(() => {
        hour = new Date().getHours();
        minute = new Date().getMinutes();
        second = new Date().getSeconds();

        if(hour<10){
            hour = `0${hour}`
        }
        if(minute<10){
            minute = `0${minute}`
        }
        if(second<10){
            second = `0${second}`
        }

        setTimeNow({...timeNow, hour:hour, minute:minute, second:second})
    },[timeNow])

    const dayToday = new Date().getDay();
    const monthToday = new Date().getMonth();
    const dateToday = new Date().getDate();
    const yearToday = new Date().getFullYear();

    return (
        <div class = "timezone-container">
            <div class="timezone-date">{getMonthName(monthToday).toUpperCase().slice(0,3)} {dateToday%10===dateToday ? `0${dateToday}` : dateToday} {yearToday}, {getDayName(dayToday)}</div>
            <div class="timezone-time">{timeNow.hour} : {timeNow.minute} : {timeNow.second}</div>
            <div class="timezone-currTimezone">You are currently in India</div>
            <select class="timezone-dropTimezone">
                <option value="china">Gotham</option>
                <option value="australia">Australia</option>
            </select>
        </div>
    )
}

export default TimeZone
