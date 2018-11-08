
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const displayDate = document.querySelector('.date-now');

function setDate() {
    // our 'second' hand updates most often
    // need this to run every second
    const now = new Date();
    // console.log(now);
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log('seconds:',seconds);

    // update our minute hand
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    // console.log('mins:',mins);

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    // console.log('hours:,hours);

    const timeString = formatHour(hours) + ":" + addZero(mins) + ":" + addZero(seconds) + ' ' + getTimePeriod(hours);
    displayDate.innerHTML = "Current time: " + timeString;
}

setInterval(setDate, 1000);


// adds a zero to the beginning of the number if needed
function addZero(num) {
    // if the number appears with less than two digits (aka less than 10),
    // add a zero to the beginning of the number 
    if (num < 10) {
        return "0" + String(num);
    } else {
        return String(num);
    }
}

// change 24h to 12h
function formatHour(h) {
    var hour = h % 12;
    if (hour == 0) {
        hour = 12;
    }
    return String(hour);
}

// get AM or PM
function getTimePeriod(h) {
    return (h < 12) ? "AM" : "PM";
}