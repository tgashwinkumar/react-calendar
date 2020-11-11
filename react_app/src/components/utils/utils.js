export const months = [{monthId:1, monthName:'January'},
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
                    {monthId:11, monthName:'December'},]

export const days = [{dayId:0, dayName:'Sunday'},
                     {dayId:1, dayName:'Monday'},
                     {dayId:2, dayName:'Tuesday'},
                     {dayId:3, dayName:'Wednesday'},
                     {dayId:4, dayName:'Thursday'},
                     {dayId:5, dayName:'Friday'},
                     {dayId:6, dayName:'Saturday'},]

export const getYears = (yearNow) => {
    var yearArray = [];
    for (let i=-10; i<10; i++){
        yearArray.push(yearNow - i);
    }
    return yearArray;
}

