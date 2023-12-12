let PR = document.querySelector("#PR")

PR.addEventListener("click", (dets) => {
    let getClass = dets.srcElement.classList[1]
    if (getClass == 'fa-play') {
        PR.innerHTML = `<i class="fa-solid fa-pause PR" style="color: #ffffff;"></i>`
    } else {
        PR.innerHTML = `<i class="fa-solid fa-play PR" style="color: #ffffff;"></i>`
    }
})

let [minute, second, millisecond] = [0, 0, 0]
let display = document.querySelector("#display")
let runningStatus = null

function timer() {
    millisecond++
    if (millisecond == 100) {
        millisecond = 0
        second++
        if (second == 60) {
            second = 0
            minute++
        }
    }
   let m = minute < 10 ? "0" + minute : minute
   let s = second < 10 ? "0" + second : second
   let ms = millisecond < 10 ? "0" + millisecond : millisecond
    display.innerHTML = m + ':' + s + ':' + ms
}
function startStop() {
    if (runningStatus !== null) {
        clearInterval(runningStatus)
        runningStatus = null
    } else {
        runningStatus = setInterval(() => {
            timer()
        }, 10);
    }
}
function stop() {
    clearInterval(runningStatus)
    runningStatus = null
    PR.innerHTML = `<i class="fa-solid fa-play PR" style="color: #ffffff;"></i>`
}
function reset() {
    location.reload()
}