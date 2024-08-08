const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor() {
        // ... (the rest of the particle animation code remains the same) ...
    }
}

function createParticles() {
    // ... (the rest of the particle animation code remains the same) ...
}

function animateParticles() {
    // ... (the rest of the particle animation code remains the same) ...
}

createParticles();
animateParticles();

window.addEventListener('resize', () => {
    // ... (the rest of the resize event code remains the same) ...
});

const audio = document.getElementById('backgroundMusic');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeSlider = document.getElementById('volumeSlider');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});