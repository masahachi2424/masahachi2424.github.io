const heroCanvas = document.getElementById('hero-canvas');
const ctx = heroCanvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null, radius: 150 };

function setCanvasSize() {
    heroCanvas.width = window.innerWidth;
    heroCanvas.height = heroCanvas.parentElement.offsetHeight;
}

window.addEventListener('resize', () => {
    setCanvasSize();
    initParticles();
});

window.addEventListener('mousemove', (e) => {
    const rect = heroCanvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});
window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});


class Particle {
    constructor() {
        this.x = Math.random() * heroCanvas.width;
        this.baseY = heroCanvas.height + Math.random() * 100;
        this.y = this.baseY;
        this.size = Math.random() * 2 + 1;
        this.isSnow = Math.random() > 0.5;
        this.speedY = (Math.random() * 1.5 + 0.5) * (this.isSnow ? -1 : -0.5); // Snow is faster
        this.speedX = (Math.random() - 0.5) * (this.isSnow ? 0.5 : 2);
        this.color = this.isSnow 
            ? `hsl(200, 100%, ${Math.random() * 40 + 60}%)` // HOKKAIDO SNOW (Blue/White)
            : `hsl(${Math.random() * 30 + 10}, 100%, 50%)`; // BANGKOK HEAT (Orange/Red)
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Reset particle if it goes off screen
        if (this.y < -this.size) {
            this.y = this.baseY;
            this.x = Math.random() * heroCanvas.width;
        }

        // Mouse interaction
        if(mouse.x !== null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (mouse.radius - distance) / mouse.radius;
                const directionX = forceDirectionX * force * (this.isSnow ? 2 : 4);
                const directionY = forceDirectionY * force * (this.isSnow ? 2 : 4);
                this.x -= directionX;
                this.y -= directionY;
            }
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    let numberOfParticles = (heroCanvas.width * heroCanvas.height) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, heroCanvas.height);
    gradient.addColorStop(0, '#0c2e4b'); // Night sky blue
    gradient.addColorStop(1, '#1a3b5a'); // Deep blue
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, heroCanvas.width, heroCanvas.height);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    requestAnimationFrame(animate);
}

setCanvasSize();
initParticles();
animate();