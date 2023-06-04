const movableElementsWrapper = document.querySelector(".movable-elements-wrapper");
const speed = 0.5;

const items = Array.from(document.querySelectorAll(".movable")).map(element => {
  return {
    element,
    shiftValue: parseFloat(element.getAttribute("data-value")) / 250,
    x: 0,
    y: 0,
    xSet: throttle((value) => {
      element.style.transform = `translateX(${value.x}px) translateY(${value.y}px)`;
    }, 16),
    ySet: throttle((value) => {
      element.style.transform = `translateX(${value.x}px) translateY(${value.y}px)`;
    }, 16),
  };
});

function throttle(func, delay) {
  let timeoutId;
  return function (...args) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        timeoutId = null;
      }, delay);
    }
  };
}

const mouseMoveHandler = (e) => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;
  
  items.forEach(item => {
    item.x = item.shiftValue * mouseX;
    item.y = item.shiftValue * mouseY;
  });  
};

document.addEventListener('mousemove', mouseMoveHandler);

function animate() {
  items.forEach(item => {
    item.xSet(item);
    item.ySet(item);
  });

  requestAnimationFrame(animate);
}

animate();
