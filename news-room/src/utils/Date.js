

export function getCurrentDate(){

    let today = new Date();

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    
    today = yyyy + '-' + mm + '-' + dd ; 

    return today;
}

export function getCurrentTextualDate(){

    const weekdays = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ]

    const months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December",
    ]

    let today = new Date();

    var textualDay = weekdays[today.getDay()];
    var day = String(today.getDate()).padStart(2,);
    var month = months[today.getMonth()]; 
    var lastDigit = day > 10 ? day.slice(1) : day;
    var ending = lastDigit == 1 ?  "st" : lastDigit == 2 ? "nd" : lastDigit == 3 ? "rd" : "th";

    today = textualDay + ', ' + month + ' ' + day + ending; 

    return today;
}




