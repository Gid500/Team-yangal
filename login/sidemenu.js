// 현재 경로
const currentPath = window.location.pathname;

// 모든 사이드바 링크 가져오기
const navLinks = document.querySelectorAll('.side-nav a');

navLinks.forEach(link => {
const linkPath = new URL(link.href).pathname;

if (currentPath === linkPath) {
    link.classList.add('active');
}
});

