let generatedCode = null;
let codeVerified = false;

function sendVerification() {
  const phone = document.getElementById("phone").value;

  if (!phone.match(/^\d{10,11}$/)) {
    alert("올바른 휴대폰 번호를 입력하세요.");
    return;
  }
  generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
  alert(`인증번호: ${generatedCode}`);
}

// 인증번호 확인
function verifyCode() {
  const codeInput = document.getElementById("code").value;

  if (codeInput === generatedCode) {
      alert("인증이 완료되었습니다.");
      codeVerified = true;
      document.getElementById("submit-btn").disabled = false;
  } else {
      alert("인증번호가 일치하지 않습니다.");
      codeVerified = false;
      document.getElementById("submit-btn").disabled = true;
  }
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