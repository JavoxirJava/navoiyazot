const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;

function moveSlider() {
    // Har 4 ta elementni ekranda ko'rsatish
    if (currentIndex >= totalSlides - 4) currentIndex = 0;
    else currentIndex++;
    const translateX = currentIndex * -31; // Har 31% siljiydi
    sliderWrapper.style.transform = `translateX(${translateX}%)`;
}

// Slayder avtomatik harakatlansin
const interval = setInterval(moveSlider, 3000); // 3 soniyada bitta slayd o'zgaradi

function prev() {
    clearInterval(interval);
    if (currentIndex <= 0) currentIndex = totalSlides - 3;
    else currentIndex--;
    const translateX = currentIndex * -31; // Har 31% siljiydi
    sliderWrapper.style.transform = `translateX(${translateX}%)`;
}

function next() {
    clearInterval(interval);
    if (currentIndex >= totalSlides - 3) currentIndex = 0;
    else currentIndex++;
    const translateX = currentIndex * -31; // Har 31% siljiydi
    sliderWrapper.style.transform = `translateX(${translateX}%)`;
}

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let startX;

sliderWrapper.addEventListener('mousedown', dragStart);
sliderWrapper.addEventListener('mouseup', dragEnd);
sliderWrapper.addEventListener('mouseleave', dragEnd);
sliderWrapper.addEventListener('mousemove', dragAction);

sliderWrapper.addEventListener('touchstart', dragStart);
sliderWrapper.addEventListener('touchend', dragEnd);
sliderWrapper.addEventListener('touchmove', dragAction);

function dragStart(e) {
    e.preventDefault();  // Text belgilanmasligi uchun
    isDragging = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    startPos = currentTranslate;
    sliderWrapper.style.cursor = 'grabbing';
}

function dragAction(e) {
    if (!isDragging) return;
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const moveX = currentX - startX;
    currentTranslate = prevTranslate + moveX;
    sliderWrapper.style.transform = `translateX(${currentTranslate}px)`;
}

function dragEnd() {
    isDragging = false;
    prevTranslate = currentTranslate;
    sliderWrapper.style.cursor = 'grab';
}

// splide
