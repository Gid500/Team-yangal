const admin = {
  type: 'admin',
  name: 'admin',
  username: 'admin',
  password: 'admin',
};

localStorage.setItem('admin', JSON.stringify(admin));

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const userid = document.getElementById("userid").value;
  const password = document.getElementById("userpassword").value;

  if (userid === 'admin') {
    const adminData = localStorage.getItem('admin');
    const parsedAdmin = JSON.parse(adminData);

    if (parsedAdmin.password === password) {
      localStorage.setItem("user", JSON.stringify(parsedAdmin));
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("loggedInUserId", userid);
      window.location.href = "../admin/admin.html";
    } else {
      alert("Incorrect password");
    }
    return;
  }

  // 일반 사용자용 
  const userData = localStorage.getItem(userid);
  if (!userData) {
    alert("User not found");
    return;
  }

  const parsedUser = JSON.parse(userData);

  if (parsedUser.password !== password) {
    alert("Incorrect password");
    return;
  }

// 로그인 성공
  parsedUser.userid = userid;
  localStorage.setItem("user", JSON.stringify(parsedUser));
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("loggedInUserId", userid);
  window.location.href = "../main/main.html";
});

