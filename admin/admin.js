const adminid = JSON.parse(localStorage.getItem('user')) || [];
const adminname = document.getElementById("admin-name");

if(adminid.type === 'admin') {
    adminname.innerText = `${adminid.name}`;
}