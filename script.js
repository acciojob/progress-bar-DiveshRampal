const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress= document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    render();
});

prev.addEventListener("click", () => {
    currentActive--;
    if(currentActive<1){
        currentActive = 1;
    }
    render();
});

function render() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    if(currentActive == 1){
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }

    if (currentActive == circles.length){
        next.disabled = true;
    } else {
        next.disabled = false;
    }
}