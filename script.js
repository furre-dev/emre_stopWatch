const clock = document.querySelector(".time")
const stopBtn = document.getElementById("stopBtn")
const resumeBtn = document.getElementById("resumeBtn")
const stopped = document.querySelector(".stopped")


let time = 100
clock.innerHTML = time

let interval = setInterval(() => {
    --time;
    if (time > 0) {
        clock.innerHTML = time
    } else {
        clock.innerHTML = 0
    }
}, 1000);

stopBtn.addEventListener("click", () => {
    if (time > 0) {
        stopped.style.display = "block";
        resumeBtn.disabled = false;
        const currentTime = time;
        clock.innerHTML = currentTime
        clearInterval(interval)
    }
})
resumeBtn.addEventListener("click", () => {
    stopped.style.display = "none";
    resumeBtn.disabled = true;
    console.log(time)
    interval = setInterval(() => {
        --time;
        if (time > 0) {
            clock.innerHTML = time
        } else {
            clock.innerHTML = 0
        }
    }, 1000);
})



