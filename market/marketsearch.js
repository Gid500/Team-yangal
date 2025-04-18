//검색창
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const products = document.querySelectorAll(".product");
  
    searchInput.addEventListener("input", function () {
      const keyword = this.value.toLowerCase();
  
      products.forEach((product) => {
        const title = product.querySelector(".product-title").textContent.toLowerCase();
        if (title.includes(keyword)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
});