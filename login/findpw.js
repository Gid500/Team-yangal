function sendVerification() {
    alert('인증번호가 발송되었습니다.');
  }

  function verifyCode() {
    alert('인증번호가 확인되었습니다.');
  }

  function showPopup() {
    const newPw = document.getElementById("newPw").value;
    const confirmPw = document.getElementById("confirmPw").value;
    if (newPw !== confirmPw) {
      document.getElementById("popupText").textContent = "비밀번호가 맞지 않습니다.";
    } else {
      document.getElementById("popupText").textContent = "비밀번호 변경이 완료되었습니다.";
    }
    document.getElementById("popup").style.display = "block";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }