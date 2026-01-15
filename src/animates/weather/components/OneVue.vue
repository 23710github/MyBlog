<template>
  <canvas ref="canvasRef" class="weather-canvas" />
</template>

<script setup>




const canvasRef = ref(null)

let raf = null
let ctx = null
let w, h, particles

const opts = {
  count: 300,      // 雾粒子数量
  radius: 2.5,     // 基础半径
  speed: 0.3,      // 漂移速度
  drift: 0.08      // 横向漂移
}

// 雾粒子类
class Fog {
  constructor() {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.r = opts.radius + Math.random() * 1.5
    this.speed = opts.speed * (0.5 + Math.random() * 0.5)
    this.drift = (Math.random() - 0.5) * opts.drift
    this.opacity = 0.3 + Math.random() * 0.4   // 0.2~0.5
  }
  update() {
    this.y -= this.speed
    this.x += this.drift
    if (this.y < -this.r) this.y = h + this.r
    if (this.x < -this.r) this.x = w + this.r
    if (this.x > w + this.r) this.x = -this.r
  }
  draw() {
    const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r)
    grad.addColorStop(0, `rgba(255,255,255,${this.opacity})`)
    grad.addColorStop(1, 'rgba(255,255,255,0.2)')
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    ctx.fill()
  }
}

function resize() {
  const canvas = canvasRef.value
  w = canvas.width = canvas.offsetWidth * devicePixelRatio
  h = canvas.height = canvas.offsetHeight * devicePixelRatio
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.scale(devicePixelRatio, devicePixelRatio)
}

function init() {
  particles = Array.from({ length: opts.count }, () => new Fog())
}

function loop() {
  ctx.clearRect(0, 0, w, h)
  particles.forEach(p => {
    p.update()
    p.draw()
  })
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
  resize()
  init()
  loop()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
})
</script>

<style scoped>
.weather-canvas {
  width: 100%;
  height: 100%;
  display: block;
  background: linear-gradient(to bottom, #0ce0b9c3 0%, #35a6dfc3 100%);
  user-select: contain;
}
</style>