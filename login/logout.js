document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".login-btn"); // 헤더 버튼
  const sidebarLoginBtn = document.querySelector(".sidebar .label a"); // 사이드바 상단 버튼
  const logoutBtn = document.getElementById("logoutBtn"); // 마이페이지 내부 버튼
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // 공통 로그아웃 함수
  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUserId");
    alert("로그아웃 되었습니다.");
    window.location.href = "../main/main.html"; 
  }

  // 로그인 상태 시 버튼 상태 변경 + 이벤트 연결
  if (isLoggedIn) {
    if (loginBtn) {
      loginBtn.textContent = "로그아웃";
      loginBtn.href = "#";
      loginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        handleLogout();
      });
    }

    if (sidebarLoginBtn) {
      sidebarLoginBtn.textContent = "로그아웃";
      sidebarLoginBtn.href = "#";
      sidebarLoginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        handleLogout();
      });
    }
  }

  //  마이페이지 내부 로그아웃 버튼
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();
      handleLogout();
    });
  }
});
