document.addEventListener("DOMContentLoaded", function () {
    const profileName = document.getElementById("profileName");
    const storedUser = localStorage.getItem("user");
  
    if (storedUser && profileName) {
      const user = JSON.parse(storedUser);
      profileName.textContent = `${user.userid}님`;
    }
});

// 로그인 상태가 아니면 접근 차단
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    alert("로그인 후 이용하실 수 있습니다.");
    window.location.href = "../login/login.html"; 
    return; 
  }
});
