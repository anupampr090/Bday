<!-- script.js -->
function goToPage(page) {
  window.location.href = page;
}

function toggleMusic() {
  const audio = document.getElementById("bg-music");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function startCelebration() {
  launchConfetti();
  setTimeout(() => {
    window.location.href = "wishes.html";
  }, 4000);
}

function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let confetti = [];

  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 40 + 10,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      tilt: Math.random() * 10 - 10,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt, c.y);
      ctx.lineTo(c.x, c.y + c.tilt + 10);
      ctx.stroke();
    });

    update();
  }

  function update() {
    confetti.forEach((c, i) => {
      c.y += Math.cos(c.d / 10) + 2;
      c.x += Math.sin(c.d / 10);
      if (c.y > canvas.height) {
        confetti[i] = {
          x: Math.random() * canvas.width,
          y: -20,
          r: c.r,
          d: c.d,
          color: c.color,
          tilt: Math.random() * 10 - 10,
        };
      }
    });
  }

  setInterval(draw, 20);
}
