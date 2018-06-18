function challenge8() {
  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 30;

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;
  let direction = true;

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if (hue >= 360) { hue = 0 };
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 20) {
      direction = !direction;
    }
    if (direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  });

  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);

  window.addEventListener('keyup', (e) => {
    if (e.keyCode === 67) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });
}

export { challenge8 }
