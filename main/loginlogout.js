// 로그인, 로그아웃
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