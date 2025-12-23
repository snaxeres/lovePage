// Script para la experiencia romántica - CARRUSEL VERSION
// Mobile-first: asume interacción táctil

const startBtn = document.getElementById('startBtn');
const dots = document.getElementById('dots');
const openVideoBtn = document.getElementById('openVideoBtn');
const videoModal = document.getElementById('videoModal');
const reelVideo = document.getElementById('reelVideo');
const closeModal = document.getElementById('closeModal');
const afterVideo = document.getElementById('afterVideo');
const continueBtn = document.getElementById('continueBtn');
const counterSection = document.getElementById('counterSection');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const openLetterBtn = document.getElementById('openLetterBtn');
const letterSection = document.getElementById('letterSection');
const closeLetterBtn = document.getElementById('closeLetterBtn');

// Configuración
const startDate = new Date(2015, 11, 23, 0, 0, 0); // Diciembre 23, 2015 00:00:00
let musicPlaying = false;
let currentIndex = 0;

const slides = Array.from(document.querySelectorAll('.slide'));
const totalSlides = slides.length;

// Inicializar carrusel
slides.forEach((s, i) => {
  if(i === 0) s.classList.add('active');
});

// Crear dots
slides.forEach((s, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot';
  if(i === 0) dot.classList.add('active');
  dot.dataset.index = i;
  dot.setAttribute('aria-label', `Ir a la foto ${i+1}`);
  dot.addEventListener('click', () => goToSlide(i));
  dots.appendChild(dot);
});

// Navegación carrusel
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  goToSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  goToSlide(currentIndex);
});

// Teclado (arrow keys)
document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowLeft') prevBtn.click();
  if(e.key === 'ArrowRight') nextBtn.click();
});

function goToSlide(i){
  slides.forEach(s => s.classList.remove('active'));
  Array.from(dots.children).forEach(d => d.classList.remove('active'));
  
  slides[i].classList.add('active');
  Array.from(dots.children)[i].classList.add('active');
  
  currentIndex = i;
  
  // Mostrar botón video si es última slide
  const videoBtn = document.getElementById('openVideoBtn');
  if(i === totalSlides - 1){
    videoBtn.style.opacity = 1;
    videoBtn.style.transform = 'translateX(-50%) scale(1)';
  } else {
    videoBtn.style.opacity = 0;
    videoBtn.style.transform = 'translateX(-50%) scale(0.98)';
  }
}

// Toggle música
musicToggle.addEventListener('click', () => {
  if(musicPlaying){
    bgMusic.pause();
    musicPlaying = false;
    musicToggle.textContent = '🔈';
    musicToggle.classList.remove('pulse');
  } else {
    bgMusic.play().catch(()=>{});
    musicPlaying = true;
    musicToggle.textContent = '🔊';
    musicToggle.classList.add('pulse');
  }
});

startBtn.addEventListener('click', () => {
  document.getElementById('gallery').scrollIntoView({behavior:'smooth'});
  // Play music on user interaction if possible
  tryPlayMusic();
});

function tryPlayMusic(){
  if(!musicPlaying){
    bgMusic.volume = 0.15; // volumen bajo, optimizado
    bgMusic.play().then(()=>{
      musicPlaying = true;
      musicToggle.textContent = '🔊';
      musicToggle.classList.add('pulse');
    }).catch(()=>{
      // autoplay may be blocked; we'll wait for further interaction
      console.log('Autoplay bloqueado. El usuario debe interactuar primero.');
    });
  }
}

// Abrir modal al pulsar el botón de la última slide
openVideoBtn.addEventListener('click', ()=>{
  openModal();
});

function openModal(){
  videoModal.setAttribute('aria-hidden','false');
  videoModal.style.display = 'flex';
  reelVideo.currentTime = 0;
  // Try to play muted first if autoplay restriction
  reelVideo.muted = false;
  reelVideo.play().catch(()=>{
    // If play blocked, mute and try again
    reelVideo.muted = true;
    reelVideo.play().catch(()=>{});
  });
}

function closeModalFn(){
  reelVideo.pause();
  reelVideo.currentTime = 0;
  videoModal.setAttribute('aria-hidden','true');
  videoModal.style.display = 'none';
  // Show after-video CTA
  showAfterVideo();
}

closeModal.addEventListener('click', closeModalFn);

// Si el video termina
reelVideo.addEventListener('ended', ()=>{
  showAfterVideo();
  closeModalFn();
});

function showAfterVideo(){
  afterVideo.hidden = false;
  afterVideo.style.opacity = 0;
  setTimeout(()=>{afterVideo.style.opacity = 1;},50);
}

continueBtn.addEventListener('click', ()=>{
  afterVideo.hidden = true;
  // El contador ya está visible por defecto
  counterSection.scrollIntoView({behavior:'smooth'});
});

// Accessibility: close modal with Esc
document.addEventListener('keydown',(e)=>{
  if(e.key === 'Escape'){
    if(videoModal.getAttribute('aria-hidden') === 'false') closeModalFn();
    if(!letterSection.hidden) closeLetterFn();
  }
});

// Attempt to start music if user interacts anywhere (help autoplay)
document.addEventListener('click', tryPlayMusic, {once:true});

// Inicializar contador cuando se carga la página
window.addEventListener('load', () => {
  updateCounter();
  setInterval(updateCounter, 1000);
  // Mostrar mensaje final
  setTimeout(()=>{
    const fm = document.getElementById('finalMessage');
    if(fm) fm.style.opacity = 1;
  }, 900);
  // DEBUG
  console.log('Script cargado. Presiona C para ver el contador, L para ver la carta.');
});

// LETTER HANDLERS
openLetterBtn.addEventListener('click', openLetterFn);
closeLetterBtn.addEventListener('click', closeLetterFn);

function openLetterFn(){
  letterSection.hidden = false;
  letterSection.scrollIntoView({behavior:'smooth'});
}

function closeLetterFn(){
  letterSection.hidden = true;
}

function updateCounter(){
  const now = new Date();
  const elapsed = now.getTime() - startDate.getTime();
  
  if(elapsed < 0){
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minutesEl.textContent = '00';
    return;
  }
  
  const totalSeconds = Math.floor(elapsed / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  
  const remHours = totalHours % 24;
  const remMinutes = totalMinutes % 60;
  
  daysEl.textContent = String(totalDays).padStart(2, '0');
  hoursEl.textContent = String(remHours).padStart(2, '0');
  minutesEl.textContent = String(remMinutes).padStart(2, '0');
}

// DEBUG: Atajos de teclado
document.addEventListener('keydown', (e) => {
  if(e.key.toLowerCase() === 'l') openLetterFn();
});
