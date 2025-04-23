const postlist = localStorage.getItem("post");
const postOBJ = JSON.parse(postlist);

const idx = location.search;
const index = idx.split("=")[1];
const post = postOBJ[index];

const postcontent = document.querySelector(".main .view-container");

function viewCount() {
    post.view++;
    const viewCount = JSON.stringify(postOBJ);
    localStorage.setItem("post", viewCount);
}

function template(){
    viewCount();
    return `
    <div>
        <div id="view-title">
            <span>제목 : </span><span>${post.title}</span>
            <span>조회수 : </span><span>${post.view}</span>
        </div>
        <div id="view-data">
            <span>작성자 : </span><span>${post.writer}</span>
            <span>작성일 : </span><span>${post.Date}</span>
        </div>
        <div id="view-content">${post.content}
        </div>
    </div>
`
}

postcontent.innerHTML += template();

const removeBtn = document.getElementById("remove-btn");

removeBtn.addEventListener('click', function() {
    postOBJ.splice(index, 1);
    console.log(postOBJ);

    const setBoard = JSON.stringify(postOBJ);
    localStorage.setItem("post", setBoard);
    location.replace('list.html');
});
