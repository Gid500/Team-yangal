let generatedCode = null;
let codeVerified = false;

// 인증번호 생성
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

// 회원가입 처리
document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    if (!codeVerified) {
        alert("휴대폰 인증을 완료해주세요.");
        return;
    }

    const name = document.getElementById("name").value;
    const newid = document.getElementById("newid").value;
    const newpw = document.getElementById("newpw").value;
    const verifypw = document.getElementById("verifypw").value;
    const phone = document.getElementById("phone").value;
    const birth = document.getElementById("birth").value;
    
    if (newpw !== verifypw) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }

    const user = {
        type: 'user',
        name: name,
        username: newid,
        password: newpw,
        phone: phone,       
        birth: birth        
    };

    localStorage.setItem(newid, JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user)); // 로그인 상태용
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUserId", newid);

    alert("회원가입이 완료되었습니다.");
    window.location.href = "../main/main.html";
});
