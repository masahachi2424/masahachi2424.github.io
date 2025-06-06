const waveCanvas = document.getElementById('wave-canvas');
const w_ctx = waveCanvas.getContext('2d');
let time = 0;
let targetAmplitude = 30;
let currentAmplitude = 30;

function setWaveCanvasSize() {
    waveCanvas.width = waveCanvas.parentElement.offsetWidth;
    waveCanvas.height = waveCanvas.parentElement.offsetHeight;
}

window.addEventListener('resize', setWaveCanvasSize);

const contactButtons = document.querySelectorAll('.contact-btn');
contactButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => targetAmplitude = 70);
    btn.addEventListener('mouseleave', () => targetAmplitude = 30);
});

function drawWave() {
    w_ctx.clearRect(0, 0, waveCanvas.width, waveCanvas.height);
    
    // Lerp for smooth amplitude change
    currentAmplitude += (targetAmplitude - currentAmplitude) * 0.1;

    w_ctx.lineWidth = 2;
    const waveColors = ['#e74c3c', '#f39c12', '#3498db'];

    for (let j = 0; j < waveColors.length; j++) {
        w_ctx.beginPath();
        w_ctx.strokeStyle = waveColors[j];
        
        for (let i = 0; i < waveCanvas.width; i++) {
            const x = i;
            const y = waveCanvas.height / 2 + 
                      Math.sin(i * (0.02 + j * 0.005) + time) * currentAmplitude * 
                      Math.sin(i * 0.001 + time + j);
            w_ctx.lineTo(x, y);
        }
        w_ctx.stroke();
    }
    
    time += 0.05;
    requestAnimationFrame(drawWave);
}

setWaveCanvasSize();
drawWave();