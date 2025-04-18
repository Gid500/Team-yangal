const user = localStorage.getItem("user");
if (user) {
const parsedUser = JSON.parse(user);
document.getElementById(
    "welcomeMessage"
).innerHTML = `Hello ${parsedUser.name}`;
document.getElementById("logoutButton").classList.remove("hidden");
} else {
document.getElementById(
    "welcomeMessage"
).innerHTML = `Hello, please <a href='login.html'>login</a>.`;
}

document
.getElementById("logoutButton")
.addEventListener("click", function () {
    localStorage.removeItem("user");
    window.location.href = "login.html";
});