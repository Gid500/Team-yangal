document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.querySelector('.login-btn');
  const sidebarLoginBtn = document.querySelector('.sidebar .label a');

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUserId');
    alert('로그아웃 되었습니다.');
    location.reload();
  }

  if (isLoggedIn) {
    if (loginBtn) {
      loginBtn.textContent = '로그아웃';
      loginBtn.href = '#';
      loginBtn.addEventListener('click', function (e) {
        e.preventDefault();
        logout();
      });
    }

    if (sidebarLoginBtn) {
      sidebarLoginBtn.textContent = '로그아웃';
      sidebarLoginBtn.href = '#';
      sidebarLoginBtn.addEventListener('click', function (e) {
        e.preventDefault();
        logout();
      });
    }

    
  }
});
