function Day (date, name, schedule) {
    this.date = date; 
    this.schedule = 'null'
    this.name = name
}

var daysLeft = []
//dynamically fills calendar with dates and boxes
function fillCalendar (elem) {
//get the date
    const today = moment()._d; 
//days left in month
    const daysLeft = moment().daysInMonth() - moment().date(); 
//loop through month from 'today' and create new var for each day
    for (var i = 0; i < daysLeft; i++) {
        newDay = moment().add(i, 'd')
        var day = new Day(newDay, i); 
        console.log(day)
        var toAppend = day.date._d.toString().slice(0,10)
        $('thead').append(`<th scope="col" class="text-center font-weight-bold" id="${toAppend}">${toAppend}</th>`)
    } 
}