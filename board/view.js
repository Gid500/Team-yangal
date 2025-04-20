const postlist = localStorage.getItem("post");
const postOBJ = JSON.parse(postlist);

const idx = location.search;
const index = idx.split("=")[1];
const post = postOBJ[index];

const postcontent = document.querySelector(".wrapper .view-container");

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
        <div id="view-content">
            내용 ${post.content}:
        </div>
        <div>
            <a href="list.html">목록으로</a>
            <button type="button" id="remove-btn">삭제</button>
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