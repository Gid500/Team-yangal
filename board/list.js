const post = localStorage.getItem("post");
const boards = JSON.parse(post);

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
        <td>${index}</td>
        <td><a href="view.html?index=${index}">${post.title}</a></td>
        <td><a href="view.html?index=${index}">${post.content}</a></td>
        <td>${post.writer}</td>
        <td>${post.Date}</td>
        <td>${post.view}</td>
    </tr>
`
}


for(let i = boards.length - 1 ; i > -1 ; i--){
    tbody.innerHTML += template(boards[i],i);
}