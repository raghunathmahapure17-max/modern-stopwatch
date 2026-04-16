let ms = 0, sec = 0, min = 0, hr = 0;
let timer = null;

function update() {
    ms++;

    if (ms == 100) {
        ms = 0;
        sec++;
    }

    if (sec == 60) {
        sec = 0;
        min++;
    }

    if (min == 60) {
        min = 0;
        hr++;
    }

    let h = hr < 10 ? "0" + hr : hr;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let milli = ms < 10 ? "0" + ms : ms;

    document.getElementById("time").innerText = `${h}:${m}:${s}:${milli}`;
}

function start() {
    if (timer !== null) return;
    timer = setInterval(update, 10);
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;
    ms = sec = min = hr = 0;
    document.getElementById("time").innerText = "00:00:00:00";
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    let lapTime = document.getElementById("time").innerText;
    let div = document.createElement("div");
    div.innerText = lapTime;
    document.getElementById("laps").appendChild(div);
}

// 🔥 AUTO START
window.onload = start;
