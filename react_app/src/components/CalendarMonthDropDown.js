import React, { useContext, useEffect, useState } from 'react'
import { months } from './utils/utils'
import './styles/CalendarMonthDropDown.css'
import { DateContext } from '../App';

function CalendarMonthDropDown({monthNow}) {

    const [monthId, setMonthId] = useState(monthNow);

    const {monthOpt} = useContext(DateContext);
    const [,setMonthOptVal] = monthOpt;

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

    useEffect(() => {
        setMonthOptVal(monthId);
    },[setMonthOptVal, monthId]);

    return (
        <div id="monthAccordion">
            <button className="monthAcc-prev" onClick={setPrevMonth}> &lt; </button>
            <div className="monthAcc-data">{months[monthId].monthName}</div>
            <button className="monthAcc-next" onClick={setNextMonth}> &gt; </button>
        </div>
    )
}

export default CalendarMonthDropDown
