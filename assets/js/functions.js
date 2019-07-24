function Day (date, schedule) {
    this.date = moment()._d; 
    this.schedule = 'null'
}


//dynamically fills calendar with dates and boxes
function fillCalendar (elem) {
//get the date
    const today = moment()._d; 
//days left in month
    const daysLeft = moment().daysInMonth() - moment().date(); 
    // console.log(daysLeft)
//loop through month from 'today' and create new var for each day
    for (var i = 0; i < daysLeft; i++) {
        const newDay = moment().add(1, 'day')
        var day = new Day(newDay); 
        console.log(Day)
    }
}