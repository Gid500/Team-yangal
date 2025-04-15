document
.getElementById("loginForm")
.addEventListener("submit", function (event) {
    event.preventDefault();
    const userid = document.getElementById("userid").value;
    const password = document.getElementById("userpassword").value;

    const user = localStorage.getItem(userid);

    if (user) {
    const parsedUser = JSON.parse(user);
    if (parsedUser.password === password) {
        localStorage.setItem("user", JSON.stringify(parsedUser));
        window.location.href = "../HTML/index.html";
    } else {
        alert("Incorrect password");
    }
    } else {
    alert("User not found");
    }
});