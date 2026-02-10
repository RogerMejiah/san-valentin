const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
// const backBtn = document.getElementById("backBtn");

let sizeFactor = 1;

function moveButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // Reducir tamaño SIN deformar
  sizeFactor -= 0.1;
  if (sizeFactor < 0.4) sizeFactor = 0.4;

  noBtn.style.width = 120 * sizeFactor + "px";
  noBtn.style.height = 45 * sizeFactor + "px";
  noBtn.style.fontSize = 16 * sizeFactor + "px";
  noBtn.style.borderRadius = 10 * sizeFactor + "px";
}

// PC
noBtn.addEventListener("mouseenter", moveButton);

// Móvil
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});

// Detecta cercanía del dedo
document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  const rect = noBtn.getBoundingClientRect();

  const dx = Math.abs(touch.clientX - (rect.left + rect.width/2));
  const dy = Math.abs(touch.clientY - (rect.top + rect.height/2));

  if (dx < 80 && dy < 80) moveButton();
});

const music = document.getElementById("bgMusic");
// Botón SI

yesBtn.onclick = () => {
  if (music) {
    music.volume = 0.1;
    music.play().catch(() => {});
  }

  screen1.classList.remove("active");
  screen2.classList.add("active");
};

// Volver
// backBtn.onclick = () => {
//   screen2.classList.remove("active");
//   screen1.classList.add("active");
// };

// Corazones
const hearts = document.querySelector(".hearts");
for (let i = 0; i < 20; i++) {
  const h = document.createElement("span");
  h.style.left = Math.random() * 100 + "vw";
  h.style.animationDelay = Math.random() * 6 + "s";
  hearts.appendChild(h);
}
