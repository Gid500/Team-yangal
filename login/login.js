document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userid = document.getElementById("userid").value;
    const password = document.getElementById("userpassword").value;

    const user = localStorage.getItem(userid);

    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.password === password) {
        // 로그인 성공 시 저장
        parsedUser.userid = userid;
        localStorage.setItem("user", JSON.stringify(parsedUser));
        localStorage.setItem("isLoggedIn", "true"); 
        localStorage.setItem("loggedInUserId", userid); 
        window.location.href = "../main/main.html";
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("User not found");
    }
  });
