//Background Overlay resizer
function adjustBackgroundSize() {
    const background = document.getElementById("background");
    const imageWidth = 1920; 
    const windowWidth = window.innerWidth;
    
    if (windowWidth < imageWidth) {
        background.style.backgroundSize = 'auto 110%';
    } else {
        background.style.backgroundSize = 'cover';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    adjustBackgroundSize();
});

window.addEventListener("resize", function () {
    adjustBackgroundSize();
});



//Background parallax effect
function updateBackgroundPosition(x, y) {
    let offsetX = (x - 0.5) * 10;
    let offsetY = (y - 0.5) * 10;

    document.getElementById("background-overlay").style.backgroundPosition = `${50 + offsetX}% ${50 + offsetY}%`;
    document.getElementById("background").style.backgroundSize = `${110 + offsetX}% ${110 + offsetY}%`;
    document.getElementById("background").style.backgroundPosition = `${50 + offsetX}% ${50 + offsetY}%`;
}

document.addEventListener("DOMContentLoaded", function () {
    updateBackgroundPosition(0.5, 0.5);
});

document.addEventListener("mousemove", function (event) {
    let x = event.clientX / window.innerWidth;
    let y = event.clientY / window.innerHeight;
    updateBackgroundPosition(x, y);
});



//Card blur
document.querySelectorAll(".nevek").forEach(card => {
    card.addEventListener("mouseenter", () => {
        document.querySelectorAll(".nevek").forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.add("blur");
            }
        });
    });

    card.addEventListener("mouseleave", () => {
        document.querySelectorAll(".nevek").forEach(otherCard => {
            otherCard.classList.remove("blur");
        });
    });
});



//Music player
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const volumeControl = document.getElementById("volume");

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸️";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶️";
    }
});

volumeControl.addEventListener("input", (e) => {
    audio.volume = e.target.value;
});
