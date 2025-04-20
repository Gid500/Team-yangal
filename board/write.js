const post = 'post';
let views = 0;
let pNo = 0;

function assignIndex() {
    const lists = JSON.parse(localStorage.getItem(BOARDLIST_LS));
    if (!lists) {
      nums = 0;
    } else {
      nums = parseInt(lists[lists.length - 1].num) + 1;
    }
  }

document
.getElementById('write-form')
.addEventListener("submit", function (event) {
    event.preventDefault();

    const writetitle = document.getElementById('write-title').value;
    const content = document.getElementById('content').value;

    const userid = JSON.parse(localStorage.getItem('user')) || [];
    const pDate = new Date();
    const year = pDate.getFullYear();
    const month = pDate.getMonth()+1;
    const day = pDate.getDate();

    const lists = JSON.parse(localStorage.getItem(post));
    if (!lists) {
        const objArr = [];
        objArr.push({
            no: `${pNo}`,
            title: writetitle,
            content: content,
            writer: `${userid.name}`,
            Date: `${year}.${month}.${day}`,
            view: `${views}`
        });
     localStorage.setItem(post, JSON.stringify(objArr));
    } else {
        lists.push({
            no: `${pNo}`,
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