document.
getElementById("signup-form")
.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const newid = document.getElementById("newid").value;
    const newpw = document.getElementById("newpw").value;
    const verifypw = document.getElementById("verifypw").value;

    if (newpw !== verifypw) {
        alert("Passwords do not match");
        return;
    }

    const user = {
        name: name,
        username: newid,
        password: newpw,
    };

    localStorage.setItem(newid, JSON.stringify(user));
    alert("Registration successful! Please login.");
    window.location.href = "../login/login.html";
});