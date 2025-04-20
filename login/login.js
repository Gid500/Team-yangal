const user = {
  type: 'admin',
  name: 'admin',
  username: 'admin',
  password: 'admin',
};

localStorage.setItem('admin', JSON.stringify(user));

document
.getElementById("loginForm")
.addEventListener("submit", function (event) {
  event.preventDefault();
  const userid = document.getElementById("userid").value;
  const password = document.getElementById("userpassword").value;

  const user = localStorage.getItem(userid);
  
  const parsedUser = JSON.parse(user);

  if(parsedUser.type === 'admin') {
    if (user) {
        if (parsedUser.password === password) {
          // 로그인 성공 시 저장
          parsedUser.userid = userid;
          localStorage.setItem("user", JSON.stringify(parsedUser));
          localStorage.setItem("isLoggedIn", "true"); 
          localStorage.setItem("loggedInUserId", userid); 
          window.location.href = "../admin/admin.html";
        } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    } else {
      alert("사용자를 찾을 수 없습니다.");
    }
  }
  
  if(parsedUser.type === 'user') {
    if (user) {  
        if (parsedUser.password === password) {
          // 로그인 성공 시 저장
          parsedUser.userid = userid;
          localStorage.setItem("user", JSON.stringify(parsedUser));
          localStorage.setItem("isLoggedIn", "true"); 
          localStorage.setItem("loggedInUserId", userid); 
          window.location.href = "../main/main.html";
        } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    } else {
      alert("사용자를 찾을 수 없습니다.");
    }
  }
});