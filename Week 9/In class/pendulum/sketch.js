
let trail = []

let posX, posY, velX, velY
let lastVelocityChange = 0
let velocityInterval = 2000

function setup() {
    createCanvas(800, 600)
    colorMode(HSB, TWO_PI, 1, 1, 1)

    posX = width * 0.5
    posY = height * 0.5

    velX = random(-4, 4)
    velY = random(-4, 4)
}

function draw() {
    background(0, 0, 0.2)

    // Dynamic colors
    let t = millis() * 0.001
    let pendulumHue = (t * 0.8) % TWO_PI
    let ballHue = (pendulumHue + PI) % TWO_PI

    // Timed velocity change
    if (millis() - lastVelocityChange >= velocityInterval) {
        changeVelocity()
        lastVelocityChange = millis()
    }

    // Organic movement using Perlin noise
    let noiseX = map(noise(millis() * 0.0005), 0, 1, -1, 1)
    let noiseY = map(noise(millis() * 0.0005 + 100), 0, 1, -1, 1)

    posX += velX + noiseX * 2
    posY += velY + noiseY * 2

    // Wall collision
    if (posX + 40 >= width || posX - 40 <= 0) {
        velX *= -1
        posX = constrain(posX, 40, width - 40)
    }

    if (posY + 40 >= height || posY - 40 <= 0) {
        velY *= -1
        posY = constrain(posY, 40, height - 40)
    }

    // Store ball positions
    trail.push(createVector(posX, posY))

    if (trail.length > 25) {
        trail.shift()
    }

    noStroke()

    // Colorful motion trails
    for (let i = 0; i < trail.length; i++) {
        let opacity = map(i, 0, trail.length - 1, 0.02, 0.35)
        let size = map(i, 0, trail.length - 1, 8, 75)
        let trailHue = (ballHue + i * 0.03) % TWO_PI

        fill(trailHue, 0.6, 1, opacity)
        circle(trail[i].x, trail[i].y, size)
    }

    // Ball glow
    for (let g = 140; g > 80; g -= 20) {
        let alpha = map(g, 140, 80, 0.03, 0.18)
        fill(ballHue, 0.7, 1, alpha)
        circle(posX, posY, g)
    }

    // Main ball
    fill(ballHue, 0.5, 1)
    circle(posX, posY, 80)

    // Pendulum
    push()
    translate(width * 0.5, 0)
    rotate(cos(millis() * 0.00314) * 0.5)

    stroke(pendulumHue, 0.8, 1)
    strokeWeight(3)
    line(0, 0, 0, 200)

    // Pendulum glow
    noStroke()
    for (let g = 90; g > 50; g -= 10) {
        let alpha = map(g, 90, 50, 0.03, 0.2)
        fill(pendulumHue, 0.7, 1, alpha)
        circle(0, 200, g)
    }

    // Main pendulum bob
    fill(pendulumHue, 0.8, 1)
    circle(0, 200, 50)

    pop()
}

function changeVelocity() {
    velX = random([-4, -3, 3, 4])
    velY = random([-4, -3, 3, 4])
}
