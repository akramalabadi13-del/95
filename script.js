
window.onload = () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.getElementById("navbar").style.display = "flex";
    document.getElementById("toggle-music").style.display = "block";
  }, 3000);
};


const bgMusic = document.getElementById('bg-music');
const toggleBtn = document.getElementById('toggle-music');

bgMusic.pause();
toggleBtn.textContent = 'تشغيل الصوت';

toggleBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play().then(() => {
      toggleBtn.textContent = 'إيقاف الصوت';
    }).catch((err) => {
      console.error('فشل تشغيل الصوت:', err);
    });
  } else {
    bgMusic.pause();
    toggleBtn.textContent = 'تشغيل الصوت';
  }
});

// هان النجوم اكرم
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let starsArray = [];
const numberOfStars = 150;

function initStars() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  starsArray = [];
  for (let i = 0; i < numberOfStars; i++) {
    starsArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 1.5,
      speed: Math.random() * 0.3 + 0.05,
      direction: Math.random() < 0.5 ? -1 : 1,
      opacity: Math.random(),
      opacityChange: 0.005 + Math.random() * 0.01
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let star of starsArray) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(200, 173, 94, ${star.opacity})`;
    ctx.shadowColor = 'rgba(200, 173, 94, 0.7)';
    ctx.shadowBlur = 8;
    ctx.fill();

    star.opacity += star.opacityChange * star.direction;
    if (star.opacity <= 0.1 || star.opacity >= 1) {
      star.direction *= -1;
    }

    star.x += star.speed * star.direction;
    if (star.x > canvas.width) star.x = 0;
    if (star.x < 0) star.x = canvas.width;
  }

  requestAnimationFrame(drawStars);
}

window.addEventListener('resize', initStars);


initStars();
drawStars();


const adminsLink = document.querySelector('a[href="#admins"]');
if (adminsLink) {
  adminsLink.addEventListener('click', (e) => {
    e.preventDefault();
    const section = document.getElementById('admins');
    section.scrollIntoView({ behavior: 'smooth' });
  });
}
