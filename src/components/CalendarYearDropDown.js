import React from 'react'
import {getYears} from './utils/utils'

function CalendarYearDropDown({yearNow}) {
    const years = getYears(yearNow)
    return (
        <select id="yearDropDown">
            {
                years.map(year => {
                    if(year === yearNow){
                        return <option value={year} selected>{year}</option>
                    }
                    return <option value={year}>{year}</option>
                })
            }
        </select>
    )
}

export default CalendarYearDropDown
