//오픈채팅 이동
function goChat() {
  const chatUrl = "https://open.kakao.com/o/yourchatlink"; // 링크 교체 필수
  const confirmGo = confirm("카카오톡 오픈채팅으로 이동하시겠습니까?");
  if (confirmGo) {
    window.open(chatUrl, "_blank");
  }
}
