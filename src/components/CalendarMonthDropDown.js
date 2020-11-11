import React, { useState } from 'react'
import { months } from './utils/utils'

function CalendarMonthDropDown({monthNow}) {

    const [monthId, setMonthId] = useState(monthNow);

    const setPrevMonth = () => {
        setMonthId(currentMonth => {
            if (currentMonth === 0){
                return 11
            }else{
                return currentMonth - 1
            }
        })
    }

    const setNextMonth = () => {
        setMonthId(currentMonth => {
            if (currentMonth === 11){
                return 0
            }else{
                return currentMonth + 1
            }
        })
    }

    return (
        <div id="monthAccordion">
            <button onClick={setPrevMonth}>Prev</button>
            <div>{months[monthId].monthName}</div>
            <button onClick={setNextMonth}>Next</button>
        </div>
    )
}

export default CalendarMonthDropDown
