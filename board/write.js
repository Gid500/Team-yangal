const post = 'post';
let views = 0;

document
.getElementById('write-form')
.addEventListener("submit", function (event) {
    event.preventDefault();

    const writetitle = document.getElementById('write-title').value;
    const content = document.getElementById('content').value;

    const userid = JSON.parse(localStorage.getItem('user'));
    const pDate = new Date();
    const year = pDate.getFullYear();
    const month = pDate.getMonth()+1;
    const day = pDate.getDate();

    const lists = JSON.parse(localStorage.getItem(post));
    if (!lists) {
        const objArr = [];
        objArr.push({
            no: '0',
            title: writetitle,
            content: content,
            writer: `${userid.name}`,
            Date: `${year}.${month}.${day}`,
            view: `${views}`
        });
     localStorage.setItem(post, JSON.stringify(objArr));
    } else {
        lists.push({
            no: `0`,
            title: writetitle,
            content: content,
            writer: `${userid.name}`,
            Date: `${year}.${month}.${day}`,
            view: `${views}`
        });
     localStorage.setItem(post, JSON.stringify(lists));
    } 
    location.replace('list.html');
})

document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
  
    if (isLoggedIn !== "true") {
        alert("로그인 후 이용하실 수 있습니다.");
        window.location.href = "../login/login.html"; // 로그인 페이지로 이동
    }
    else {
      document.body.classList.remove("hidden"); 
    }
});