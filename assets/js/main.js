const musica = document.getElementById("musica");
const box = document.querySelector(".music-box");

// Recupera estado salvo
if (localStorage.getItem("musicaTocando") === "true") {
    musica.play();
    box.textContent = "⏸";
} else {
    musica.pause();
    box.textContent = "▶";
}

function toggleMusic() {
    if (musica.paused) {
        musica.play();
        box.textContent = "⏸";
        localStorage.setItem("musicaTocando", "true");
    } else {
        musica.pause();
        box.textContent = "▶";
        localStorage.setItem("musicaTocando", "false");
    }
}
