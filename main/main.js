// 배너
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = dots.length;

function moveToSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`; //슬라이드 이동
    dots.forEach(dot => dot.classList.remove('active')); //모든 도트 초기화
    dots[index].classList.add('active'); //현재 도트 활성화
    currentIndex = index; //현재 위치 갱신
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index);
        moveToSlide(index);
    });
});

// 자동 슬라이드(4초)
setInterval(() => {
    const nextIndex = (currentIndex + 1) % totalSlides;
    moveToSlide(nextIndex);
}, 4000);

/*
function visitCount() {
    if(document.cookie.match(/withit/)) return;

    let a = new Date();
    a.setDate(new Date().getDate()+1);
    document.cookie = 'withit = 1; Exprires = ' + '+ a';

    fetch(url, options);
}
*/
