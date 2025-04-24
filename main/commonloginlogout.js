//commonloginlogout

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
      userName.textContent = `${loggedInUser.username}님`;

      // 로그인 버튼을 로그아웃으로 변경
      loginBtn.textContent = "로그아웃";
      loginBtn.href = "#";
      loginBtn.addEventListener("click", function (e) {
          e.preventDefault();
          localStorage.removeItem("user");
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("loggedInUserId");
          window.location.href = "../main/main.html";
      });

      // 사이드바 로그인 숨기기
      sidebarLogin.style.display = "none";

      // 사이드바 메뉴 숨기기
      sidebarMenus.forEach(menu => menu.style.display = "none");

      // 사이드바 로그아웃
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
