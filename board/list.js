let post = localStorage.getItem("post");

if(post === null){
    const intialState = []
    const state = JSON.stringify(intialState);
    localStorage.getItem("post",state);
    post = state
}

const tbody = document.querySelector("tbody");

function template(post, index){
    return `
    <tr>
        <td>${index + 1}</td>
        <td><a href="/board/view.html?index=${index}">${post.title}</a></td>
        <td><a href="/board/view.html?index=${index}">${post.content}</a></td>
        <td>${post.writer}</td>
        <td>${post.Date}</td>
        <td>${post.view}</td>
    </tr>
`   
}

const boards = JSON.parse(post);

for(let i = 0 ; i <boards.length ; i++){
    tbody.innerHTML += template(boards[i],i);
}