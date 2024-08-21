const { createCanvas } = require('canvas');
const fs = require('fs');

const width = 300;
const height = 300;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Example Snake Game Drawing
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, width, height);

// Draw snake and food (dummy example)
ctx.fillStyle = 'green';
ctx.fillRect(50, 50, 20, 20); // Snake head
ctx.fillStyle = 'red';
ctx.fillRect(100, 100, 20, 20); // Food

const out = fs.createWriteStream('./snake-image.png');
const stream = canvas.createPNGStream();
stream.pipe(out);
