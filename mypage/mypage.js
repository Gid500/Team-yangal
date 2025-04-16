//햄버거버튼
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

// 로그인&로그아웃
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
        window.location.href = "../main/main.html";
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
        window.location.href = "../main/main.html";
      });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const profileName = document.getElementById("profileName");
    const storedUser = localStorage.getItem("user");
  
    if (storedUser && profileName) {
      const user = JSON.parse(storedUser);
      profileName.textContent = `${user.userid}님`;
    }
});

/*
// 로그인 상태가 아니면 접근 차단
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    alert("로그인 후 이용하실 수 있습니다.");
    window.location.href = "../login/login.html"; // 또는 main.html
    return; // 이후 스크립트 실행 중단
  }
});
*/