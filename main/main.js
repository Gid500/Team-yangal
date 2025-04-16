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


document.addEventListener("DOMContentLoaded", function () {
    const userInfo = document.getElementById("userInfo");
    const userName = document.getElementById("userName");
    const loginBtn = document.querySelector(".login-btn");
    const sidebarLogin = document.getElementById("sidebarLogin");
    const sidebarMenus = document.querySelectorAll(".sidebar-menu");
  
    const storedUser = localStorage.getItem("user");
  
    if (storedUser) {
      const loggedInUser = JSON.parse(storedUser);
  
      // 사용자 정보 표시
      userInfo.style.display = "flex";
      userName.textContent = `${loggedInUser.userid}님`;
  
      // 로그아웃 버튼 설정
      loginBtn.textContent = "로그아웃";
      loginBtn.href = "#";
      loginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("user");
        window.location.href = "main.html";
      });
  
      // 사이드바 로그인 숨기기
      sidebarLogin.style.display = "none";
  
      // 사이드바 메뉴 숨기기
      sidebarMenus.forEach(menu => menu.style.display = "none");
  
      // 사이드바 로그아웃 설정
      const sidebarLogout = document.getElementById("logoutBtn");
      sidebarLogout.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("user");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("loggedInUserId");
        window.location.href = "main.html";
      });
    }
});
  
  
  