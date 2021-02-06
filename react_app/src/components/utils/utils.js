export const isExist = obj => {
    return Object.keys(obj).length !== 0;
}

export const months = [
    {monthId:1, monthName:'January'},
    {monthId:1, monthName:'February'},
    {monthId:2, monthName:'March'},
    {monthId:3, monthName:'April'},
    {monthId:4, monthName:'May'},
    {monthId:5, monthName:'June'},
    {monthId:6, monthName:'July'},
    {monthId:7, monthName:'August'},
    {monthId:8, monthName:'September'},
    {monthId:9, monthName:'October'},
    {monthId:10, monthName:'November'},
    {monthId:11, monthName:'December'},
]

export const days = [
    {dayId:0, dayName:'Sunday'},
    {dayId:1, dayName:'Monday'},
    {dayId:2, dayName:'Tuesday'},
    {dayId:3, dayName:'Wednesday'},
    {dayId:4, dayName:'Thursday'},
    {dayId:5, dayName:'Friday'},
    {dayId:6, dayName:'Saturday'},
]


export const getYears = (yearNow) => {
    var yearArray = [];
    for (let i=-10; i<10; i++){
        yearArray.push(yearNow - i);
    }
    return yearArray;
}

export const getDayName = (dayId) => {
    let resultDay;
    days.forEach(day => {
        if(day.dayId === dayId){
            resultDay = day.dayName;
        }
    })
    return resultDay;
}

export const getMonthName = (monthId) => {
    let resultMonth;
    months.forEach(month => {
        if(month.monthId === monthId){
            resultMonth = month.monthName;
        }
    })
    return resultMonth
}

export const sampleDays = [
    {id:  1, date: 1,    day: 0, week:1, history: {}, birthday:{}, holiday: {}, },
    {id:  2, date: 2,    day: 1, week:1, history: {}, birthday:{}, holiday: {}, },
    {id:  3, date: 3,    day: 2, week:1, history: {}, birthday:{}, holiday: {}, },
    {id:  4, date: 4,    day: 3, week:1, history: {}, birthday:{}, holiday: {}, },
    {id:  5, date: 5,    day: 4, week:1, history: {}, birthday:{}, holiday: {}, },
    {id:  6, date: 6,    day: 5, week:1, history: {}, birthday:{}, holiday: {}, },
    {id:  7, date: 7,    day: 6, week:1, history: {}, birthday:{}, holiday: {}, },
    {id:  8, date: 8,    day: 0, week:2, history: {}, birthday:{}, holiday: {}, },
    {id:  9, date: 9,    day: 1, week:2, history: {}, birthday:{}, holiday: {}, },
    {id: 10, date: 10,   day: 2, week:2, history: {}, birthday:{}, holiday: {}, },
    {id: 11, date: 11,   day: 3, week:2, history: {}, birthday:{}, holiday: {}, },
    {id: 12, date: 12,   day: 4, week:2, history: {}, birthday:{}, holiday: {}, },
    {id: 13, date: 13,   day: 5, week:2, history: {}, birthday:{}, holiday: {}, },
    {id: 14, date: 14,   day: 6, week:2, history: {}, birthday:{}, holiday: {}, },
    {id: 15, date: 15,   day: 0, week:3, history: {}, birthday:{}, holiday: {}, },
    {id: 16, date: 16,   day: 1, week:3, history: {}, birthday:{}, holiday: {}, },
    {id: 17, date: 17,   day: 2, week:3, history: {}, birthday:{}, holiday: {}, },
    {id: 18, date: 18,   day: 3, week:3, history: {}, birthday:{}, holiday: {}, },
    {id: 19, date: 19,   day: 4, week:3, history: {}, birthday:{}, holiday: {}, },
    {id: 20, date: 20,   day: 5, week:3, history: {}, birthday:{}, holiday: {}, },
    {id: 21, date: 21,   day: 6, week:3, history: {}, birthday:{}, holiday: {}, },
    {id: 22, date: 22,   day: 0, week:4, history: {}, birthday:{}, holiday: {}, },
    {id: 23, date: 23,   day: 1, week:4, history: {}, birthday:{}, holiday: {}, },
    {id: 24, date: 24,   day: 2, week:4, history: {}, birthday:{}, holiday: {}, },
    {id: 25, date: 25,   day: 3, week:4, history: {}, birthday:{}, holiday: {}, },
    {id: 26, date: 26,   day: 4, week:4, history: {}, birthday:{}, holiday: {}, },
    {id: 27, date: 27,   day: 5, week:4, history: {}, birthday:{}, holiday: {}, },
    {id: 28, date: 28,   day: 6, week:4, history: {}, birthday:{}, holiday: {}, },
    {id: 29, date: 29,   day: 0, week:5, history: {}, birthday:{}, holiday: {}, },
    {id: 30, date: 30,   day: 1, week:5, history: {}, birthday:{}, holiday: {}, },
    {id: 31, date: null, day: 2, week:5, history: {}, birthday:{}, holiday: {}, },
    {id: 32, date: null, day: 3, week:5, history: {}, birthday:{}, holiday: {}, },
    {id: 33, date: null, day: 4, week:5, history: {}, birthday:{}, holiday: {}, },
    {id: 34, date: null, day: 5, week:5, history: {}, birthday:{}, holiday: {}, },
    {id: 35, date: null, day: 6, week:5, history: {}, birthday:{}, holiday: {}, },
]