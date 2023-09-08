const container = document.querySelector('[data-container]');
const imageBefore = container.querySelector('[data-image1]');
const imageAfter = container.querySelector('[data-image2]');
const button = container.querySelector('[data-button]');

const { x: containerX, width: containerWidth } = container.getBoundingClientRect();

const handleDown = (e) => {
  window.addEventListener('mousemove', handleDrag);
  window.addEventListener('mouseup', handleMouseUp);
}

const handleDrag = (e) => {
  const buttonPos = e.clientX - containerX;

  if (buttonPos < 0) {
    return;
  }

  if (buttonPos > containerWidth) {
    return;
  }

  const percent = buttonPos / containerWidth * 100;

  window.requestAnimationFrame(() => {
    button.style.left = buttonPos + 'px';
    imageBefore.style = `clip-path: polygon(0 0, ${percent}% 0%, ${percent}% 100%, 0 100%);`;
    imageAfter.style = `clip-path: polygon(${percent}% 0%, 100% 0%, 100% 100%, ${percent}% 100%);`;
  });
}

const handleMouseUp = () => {
  window.removeEventListener('mousemove', handleDrag);
  window.removeEventListener('mouseup', handleMouseUp);
}

if (button) {
  button.addEventListener('mousedown', handleDown);
}
