const writeform = document.getElementById("write-form");

const submitHandler = (e) => {
    e.preventDefault();
    const writetitle = e.target.writetitle.value;
    const content = e.target.content.value;

    console.log(writetitle);
    console.log(content);
}

writeform.addEventListener("submit", submitHandler);