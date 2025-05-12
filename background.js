let particles = [];
const particleCount = 50;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  
  // Создаем частицы
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  clear();
  // Обновляем и отображаем частицы
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Particle {
  constructor() {
    this.reset();
    this.y = random(height); // Начальная позиция может быть где угодно
  }

  reset() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(3, 8);
    this.speedX = random(-1, 1);
    this.speedY = random(-0.5, 0.5);
    this.opacity = random(50, 150);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Если частица выходит за пределы экрана, сбрасываем её
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.reset();
    }
  }

  display() {
    noStroke();
    fill(66, 165, 245, this.opacity); // Голубой цвет с прозрачностью
    circle(this.x, this.y, this.size);
  }
} 