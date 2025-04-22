document.addEventListener('DOMContentLoaded', () => {
    const storedUser = localStorage.getItem('user');
  
    if (storedUser) {
      const user = JSON.parse(storedUser);
  
      document.getElementById('userId').textContent = user.username || '';
      document.getElementById('userPw').textContent = user.password || '';
      document.getElementById('userName').textContent = user.name || '';
      document.getElementById('userPhone').textContent = user.phone || '';
      document.getElementById('userBirth').textContent = user.birth || '';
    } else {
      alert('회원 정보가 없습니다.');
      window.location.href = '../login/login.html';
    }
  });
  