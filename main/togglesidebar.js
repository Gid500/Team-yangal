document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;
  const menuLinks = document.querySelectorAll('.nav-menu a');

  menuLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    // 예: /market/market.html → /market
    const linkDir = linkPath.split('/').slice(0, -1).join('/');

    if (currentPath.startsWith(linkDir)) {
      link.classList.add('active');
    }
  });
});


function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuBtn = document.getElementById("menuBtn");
  const isOpen = sidebar.classList.contains("active");

  if (isOpen) {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  menuBtn.style.display = "block";
  } else {
  sidebar.classList.add("active");
  overlay.classList.add("active");
  menuBtn.style.display = "none";
  }
}
  
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("menuBtn").style.display = "block";
}