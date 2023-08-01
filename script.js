let digitalElement = document.querySelector(".digital")
let segElement = document.querySelector(".p_s")
let minElement = document.querySelector(".p_m")
let hrsElement = document.querySelector(".p_h")

function updateClock() {
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    //relogio digital
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    //relogio analogico
    let segDeg = ((360 / 60) * second) - 90;
    let minDeg = ((360 / 60) * minute) - 90;
    let hrsDeg = ((360 / 12) * hour) - 90;

    segElement.style.transform = `rotate(${segDeg}deg)`;
    minElement.style.transform = `rotate(${minDeg}deg)`;
    hrsElement.style.transform = `rotate(${hrsDeg}deg)`;
}

function fixZero(time) {
    if (time < 10) {
        return "0"+time
    } else {
        return time
    }
}

setInterval(updateClock, 1000)
updateClock()