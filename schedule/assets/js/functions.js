//prints month to use to schedule
function scheduling () {
    for (var i = 0; i < moment().daysInMonth(); i++) {
        newDay = moment().add(i, 'd');
        var append = newDay.toString().slice(0,10); 
    if (i <= 6) {
        $('#week-1').append(`<td class="pb-5" >${append} <button id="${append}"> Add Shift </button> </td>`)
    } else if (i <= 13) {
        $('#week-2').append(`<td class="pb-5" >${append} <button id="${append}"> Add Shift </button> </td>`)
    } else if (i <= 20) {
        $('#week-3').append(`<td class="pb-5" >${append} <button id="${append}"> Add Shift </button> </td>`)
    } else if (i <= 27) {
        $('#week-4').append(`<td class="pb-5" >${append} <button id="${append}"> Add Shift </button> </td>`)
    } 
    }
}