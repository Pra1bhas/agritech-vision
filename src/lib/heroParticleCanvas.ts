const MAX_PARTICLES = 80;
const AMBIENT_COUNT = 18;
const CURSOR_GLOW_RADIUS = 200;
const SPAWN_PER_MOVE = 2;
const SPAWN_THROTTLE_MS = 48;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  life: number;
  decay: number;
  ambient: boolean;
  fill: string;
};

function randomRange(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function pickPollenFill(): string {
  const r = Math.random();
  if (r < 0.45) return `rgba(255, 255, 255, ${randomRange(0.25, 0.65)})`;
  if (r < 0.75) return `rgba(76, 175, 80, ${randomRange(0.2, 0.55)})`;
  return `rgba(249, 168, 37, ${randomRange(0.2, 0.5)})`;
}

function parseRgbaAlpha(fill: string): number {
  const match = fill.match(/[\d.]+(?=\s*\))/);
  return match ? parseFloat(match[0]) : 0.5;
}

function setRgbaAlpha(fill: string, alpha: number): string {
  return fill.replace(/[\d.]+\)$/, `${alpha})`);
}

export function initHeroParticleCanvas(
  canvas: HTMLCanvasElement,
  container: HTMLElement,
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  let width = 0;
  let height = 0;
  let particles: Particle[] = [];
  let cursorX = -9999;
  let cursorY = -9999;
  let targetCursorX = -9999;
  let targetCursorY = -9999;
  let glowStrength = 0;
  let animId = 0;
  let lastSpawn = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = container.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function trimParticles() {
    while (particles.length > MAX_PARTICLES) {
      const cursorIdx = particles.findIndex((p) => !p.ambient);
      if (cursorIdx >= 0) particles.splice(cursorIdx, 1);
      else particles.shift();
    }
  }

  function createAmbientParticle(): Particle {
    const fill = pickPollenFill();
    return {
      x: randomRange(0, width),
      y: randomRange(0, height),
      vx: randomRange(-0.25, 0.25),
      vy: randomRange(-0.35, 0.35),
      radius: randomRange(2, 4),
      opacity: parseRgbaAlpha(fill),
      life: 1,
      decay: 0,
      ambient: true,
      fill,
    };
  }

  function createCursorParticle(x: number, y: number): Particle {
    const fill = `rgba(255, 255, 255, ${randomRange(0.35, 0.7)})`;
    return {
      x: x + randomRange(-28, 28),
      y: y + randomRange(-28, 28),
      vx: randomRange(-0.35, 0.35),
      vy: randomRange(-1.1, -0.35),
      radius: randomRange(2, 5),
      opacity: parseRgbaAlpha(fill),
      life: 1,
      decay: randomRange(0.004, 0.009),
      ambient: false,
      fill,
    };
  }

  function initAmbient() {
    particles = [];
    for (let i = 0; i < AMBIENT_COUNT; i++) {
      particles.push(createAmbientParticle());
    }
  }

  function spawnNearCursor(x: number, y: number) {
    const now = performance.now();
    if (now - lastSpawn < SPAWN_THROTTLE_MS) return;
    lastSpawn = now;

    const room = MAX_PARTICLES - particles.length;
    const count = Math.min(SPAWN_PER_MOVE, room);
    for (let i = 0; i < count; i++) {
      particles.push(createCursorParticle(x, y));
    }
    trimParticles();
  }

  function handlePointer(clientX: number, clientY: number) {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      glowStrength *= 0.92;
      return;
    }

    targetCursorX = x;
    targetCursorY = y;
    glowStrength = 1;
    spawnNearCursor(x, y);
  }

  function drawCursorGlow(x: number, y: number, strength: number) {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, CURSOR_GLOW_RADIUS);
    gradient.addColorStop(0, `rgba(76, 175, 80, ${0.22 * strength})`);
    gradient.addColorStop(0.35, `rgba(249, 168, 37, ${0.14 * strength})`);
    gradient.addColorStop(0.65, `rgba(27, 94, 32, ${0.08 * strength})`);
    gradient.addColorStop(1, "rgba(27, 94, 32, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  function drawParticle(p: Particle) {
    const alpha = p.ambient ? p.opacity : p.opacity * p.life;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = setRgbaAlpha(p.fill, alpha);
    ctx.fill();
  }

  function updateParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (!p.ambient) {
        p.life -= p.decay;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
      } else {
        if (p.x < -8) p.x = width + 8;
        if (p.x > width + 8) p.x = -8;
        if (p.y < -8) p.y = height + 8;
        if (p.y > height + 8) p.y = -8;
      }

      drawParticle(p);
    }

    while (
      particles.filter((p) => p.ambient).length < AMBIENT_COUNT &&
      particles.length < MAX_PARTICLES
    ) {
      particles.push(createAmbientParticle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = "rgba(27, 94, 32, 0.04)";
    ctx.fillRect(0, 0, width, height);

    cursorX += (targetCursorX - cursorX) * 0.14;
    cursorY += (targetCursorY - cursorY) * 0.14;
    glowStrength *= 0.985;

    if (glowStrength > 0.02) {
      drawCursorGlow(cursorX, cursorY, glowStrength);
    }

    updateParticles();

    animId = requestAnimationFrame(animate);
  }

  const onResize = () => resize();
  const onMouseMove = (e: MouseEvent) => handlePointer(e.clientX, e.clientY);
  const onTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    if (touch) handlePointer(touch.clientX, touch.clientY);
  };

  resize();
  initAmbient();
  animate();

  window.addEventListener("resize", onResize);
  container.addEventListener("mousemove", onMouseMove, { passive: true });
  container.addEventListener("touchmove", onTouchMove, { passive: true });

  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener("resize", onResize);
    container.removeEventListener("mousemove", onMouseMove);
    container.removeEventListener("touchmove", onTouchMove);
  };
}
