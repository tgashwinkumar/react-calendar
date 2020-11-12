import React,{useEffect} from 'react'
import {getYears} from './utils/utils'

function CalendarYearDropDown({yearNow}) {
    const years = getYears(yearNow)
    
    const scrollFunc = (event) => {
        event.preventDefault();
        
        if(event.target.value===""){
            event.target.value=yearNow
        }
        
        if(event.deltaY < 0){
            if(event.target.value+1){
                event.target.value+=1
            }
        }else if(event.deltaY > 0){
            if(event.target.value-1){
                event.target.value-=1
            }
        }
    }
    
    useEffect(() => {
        const yearDropDown = document.querySelector('#yearDropDown');
        yearDropDown.addEventListener("wheel",scrollFunc)
    })
    
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
    