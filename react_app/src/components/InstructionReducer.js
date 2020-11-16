export const initialIns = ""

export const InstructionReducer = (state,action) => {
    switch(action){
        case "birthdayIcon":
            state = "Birthdays"
            return state
        case "eventsIcon":
            state = "Holidays"
            return state
        case "weatherIcon":
            state = "Weather forecast"
            return state
        case "timeZoneIcon":
            state = "Time and Timezones"
            return state
        case "todayInHistoryIcon":
            state = "Today in History"
            return state
        case "toDoIcon":
            state = "ToDo List"
            return state
        default:
            return ""
    }
}