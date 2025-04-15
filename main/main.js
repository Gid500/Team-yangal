
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const menuBtn = document.getElementById("menuBtn");
    const isOpen = sidebar.classList.contains("active");

    if (isOpen) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    menuBtn.style.display = "block";
    } else {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    menuBtn.style.display = "none";
    }
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
    document.getElementById("menuBtn").style.display = "block";
}

const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = dots.length;

function moveToSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index);
        moveToSlide(index);
    });
});

// 자동 슬라이드
setInterval(() => {
    const nextIndex = (currentIndex + 1) % totalSlides;
    moveToSlide(nextIndex);
}, 4000);

