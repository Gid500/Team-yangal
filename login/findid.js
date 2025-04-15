function sendVerification() {
  const phone = document.getElementById("phone").value;
  if (!phone || phone.length < 10) {
    alert("휴대폰 번호를 정확히 입력하세요.");
    return;
  }
  alert("인증번호가 전송되었습니다.");
}

function verifyCode() {
  const code = document.getElementById("code").value;
  if (!code) {
    alert("인증번호를 입력해주세요.");
    return;
  }
  alert("인증 완료되었습니다.");
}

function showResult() {
  const birth = document.getElementById("birth").value;
  const phone = document.getElementById("phone").value;

  if (!birth || birth.length !== 8 || !phone) {
    alert("모든 정보를 정확히 입력해주세요.");
    return;
  }

  const popup = document.getElementById("popup");
  const text = document.getElementById("popupText");
  text.innerText = `아이디는 ${vitantan_user01} 입니다.`;
  popup.classList.add("active");
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
}
