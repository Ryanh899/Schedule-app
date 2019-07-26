



//prints month to use to schedule
function scheduling () {
    for (var i = 0; i < moment().daysInMonth(); i++) {
        newDay = moment().add(i, 'd');
        var append = newDay.toString().slice(0,10); 
    if (i <= 6) {
        $('#week-1').append(`<td class="pb-5" id="${append}" >${append} <button class="btn btn-primary shiftButton" id="${append}"> Add Shift </button> </td>`)
    } else if (i <= 13) {
        $('#week-2').append(`<td class="pb-5" id="${append}" >${append} <button class="btn btn-primary shiftButton" id="${append}"> Add Shift </button> </td>`)
    } else if (i <= 20) {
        $('#week-3').append(`<td class="pb-5" id="${append}" >${append} <button class="btn btn-primary shiftButton" id="${append}"> Add Shift </button> </td>`)
    } else if (i <= 27) {
        $('#week-4').append(`<td class="pb-5" id="${append}">${append} <button class="btn btn-primary shiftButton" id="${append}"> Add Shift </button> </td>`)
    } 
    }
}

//constructor for schedule object 
function employeeByDay (date, employee, hours) {
    this.date = date;
    this.employee = employee; 
    this.hours = hours;
}

//function for what happens on 'add shift' button click
function addShift () {
    $('.shiftButton').on('click', function () {
        var shift = new employeeByDay($(this).attr('id'), prompt('Pick an employee'), prompt('Input hours') );
        $(this).parent().append(`<p id="${$(this).employee}"> ${shift.employee}: ${shift.hours.toString()}</p>`);
        firebase.database().ref(`day-${shift.date}`).set({
            shift: shift.employee
        })
    })
}
