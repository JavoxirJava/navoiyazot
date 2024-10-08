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

