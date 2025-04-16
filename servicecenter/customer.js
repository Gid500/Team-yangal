function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuBtn = document.getElementById("menuBtn");
  const isOpen = sidebar.classList.contains("active");

  if (isOpen) {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  menuBtn.style.display = "block";
  } else {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  menuBtn.style.display = "none";
  }
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("menuBtn").style.display = "block";
}



// ✅ 오픈채팅 이동
function goChat() {
  const chatUrl = "https://open.kakao.com/o/yourchatlink"; // 링크 교체 필수
  const confirmGo = confirm("카카오톡 오픈채팅으로 이동하시겠습니까?");
  if (confirmGo) {
    window.open(chatUrl, "_blank");
  }
}
