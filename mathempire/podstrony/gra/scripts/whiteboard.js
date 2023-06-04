const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');
let isDrawing = false;
let x = 0;
let y = 0;
var offsetX;
var offsetY;

const defaultColor = 'black';
const defaultLineWidth = 3;

function startup() {
  ['touchstart', 'touchend', 'touchcancel', 'touchmove'].forEach(event => {
    canvas.addEventListener(event, handleEvent);
  });

  canvas.addEventListener('mousedown', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
  });

  canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
      drawLine(x, y, e.offsetX, e.offsetY);
      [x, y] = [e.offsetX, e.offsetY];
    }
  });

  canvas.addEventListener('mouseup', (e) => {
    if (isDrawing) {
      drawLine(x, y, e.offsetX, e.offsetY);
      [x, y] = [0, 0];
      isDrawing = false;
    }
  });
}

document.addEventListener("DOMContentLoaded", startup);

const ongoingTouches = [];

function handleEvent(evt) {
  evt.preventDefault();
  const touches = evt.changedTouches;
  offsetX = canvas.getBoundingClientRect().left;
  offsetY = canvas.getBoundingClientRect().top;
  for (let i = 0; i < touches.length; i++) {
    ongoingTouches.push(copyTouch(touches[i]));
  }
}

function copyTouch({ identifier, clientX, clientY }) {
  return { identifier, clientX, clientY };
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.lineJoin = "round";
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.closePath();
  context.strokeStyle = defaultColor;
  context.lineWidth = defaultLineWidth;
  context.stroke();
}

function clearArea() {
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
