import React,{useContext, useEffect, useState} from 'react'
import './styles/CalendarYearDropDown.css'
import {getYears} from './utils/utils'
import {DateContext} from '../App'

function CalendarYearDropDown({yearNow}) {
    const years = getYears(yearNow);

    const {yearOpt} = useContext(DateContext)
    const [,setYearOptVal] = yearOpt;
    
    const [year, setYear] = useState(yearNow);
    
    const handleInput = (event) => {
        var val = parseInt(event.target.value)
        setYear(val);
    }
    
    const scrollFunc = (event) => {
        event.preventDefault();
        
        if(!event.target.value){
            event.target.value = yearNow
        }

        var val = parseInt(event.target.value);

        if(event.deltaY <= 0){
            val += 1;
            if(val > years[0]){
                val = years[0];
            }
        }else{
            val -= 1;
            if(val < years[years.length - 1]){
                val = years[years.length - 1];
            }
        }
        event.target.value = val;
        
    }
    
    useEffect(() => {
        const yearField = document.querySelector('#yearField');
        yearField.addEventListener("wheel", scrollFunc);
    })

    useEffect(()=>{
        setYearOptVal(year);
    },[year, setYearOptVal])
    
    return (
        <div className="yearField-container">
            <input type="text" value={year} id="yearField" onChange={event => handleInput(event)} />
        </div>
        )
    }
    
    export default CalendarYearDropDown
    