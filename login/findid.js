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


function showResult() {
  const birth = document.getElementById("birth").value;
  const phone = document.getElementById("phone").value;

  if (!birth || birth.length !== 8 || !phone) {
    alert("모든 정보를 정확히 입력해주세요.");
    return;
  }

  let foundId = null;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    try {
      const user = JSON.parse(localStorage.getItem(key));
      if (
        user &&
        user.type === "user" &&
        user.birth === birth &&
        user.phone === phone
      ) {
        foundId = user.username;
        break;
      }
    } catch (e) {
      // JSON 파싱 오류 무시
    }
  }

  const popup = document.getElementById("popup");
  const text = document.getElementById("popupText");

  if (foundId) {
    text.innerText = `아이디는 ${foundId} 입니다.`;
  } else {
    text.innerText = "입력하신 정보와 일치하는 회원이 없습니다.";
  }

  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

