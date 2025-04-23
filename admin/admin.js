//로컬 스토리지에서 user라는 키로 저장된 값을 문자열로 가져옴 
//|| [] user값이 null이면 빈 배열을 기본값으로 설정


const adminid = JSON.parse(localStorage.getItem('user')) || [];
const adminname = document.getElementById("admin-name");

if(adminid.type === 'admin') {
    adminname.innerText = `${adminid.name}`;
}