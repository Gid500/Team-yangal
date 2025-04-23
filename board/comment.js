let number = 0;
const commentList = `commentList`;

const postComent = document.querySelector(".main .view-container");

document
.getElementById('coment-form')
.addEventListener("submit", function (event) {
    event.preventDefault();

    const commentContent = document.getElementById('comment-content').value;

    const userid = JSON.parse(localStorage.getItem('user'));
    const pDate = new Date();
    const year = pDate.getFullYear();
    const month = pDate.getMonth()+1;
    const day = pDate.getDate();

    const lists = JSON.parse(localStorage.getItem(commentList));
    if (!lists) {
        const objArr = [];
        objArr.push({
            content: commentContent,
            writer: `${userid.name}`,
            Date: `${year}.${month}.${day}`
        });
     localStorage.setItem(commentList, JSON.stringify(objArr));
    } else {
        lists.push({
            content: commentContent,
            writer: `${userid.name}`,
            Date: `${year}.${month}.${day}`
        });
     localStorage.setItem(commentList, JSON.stringify(lists));
    } 
    location.replace('list.html');
})


const comment = JSON.parse(localStorage.getItem(commentList));
const cmtrender = document.getElementById('coment-list');
function template2(comment){
    return `
    <div class="coment">
        <div>
            <span>작성자 : </span><span>${comment.writer}</span><span>작성일 : </span><span>${comment.Date}</span>
            <div id="coment-content">
                <p>${comment.content}</p>
            </div>
        </div>
    </div>
` 
}

for(let i = comment.length - 1 ; i > -1 ; i--){
    cmtrender.innerHTML += template2(comment[i]);
}