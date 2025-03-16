const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress"); // Assuming you want to use this for the progress line
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
    if(currentActive < 1){
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

    // Handle enabling/disabling of buttons
    if(currentActive == 1){
        prev.disabled = true;
    } else {
        prev.disabled = false;
    }

    if(currentActive == circles.length){
        next.disabled = true;
    } else {
        next.disabled = false;
    }

    // Update the progress line
    const progressWidth = (currentActive - 1) / (circles.length - 1) * 100; // Calculate the width of the progress line
    progress.style.width = `${progressWidth}%`; // Update the width of the progress line
}
