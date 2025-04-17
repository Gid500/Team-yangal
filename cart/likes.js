// likes.js

document.addEventListener("DOMContentLoaded", () => {
    const removeBtns = document.querySelectorAll(".remove-btn");
    const buyBtns = document.querySelectorAll(".buy-btn");
  
    removeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const confirmed = confirm("이 상품을 찜 목록에서 삭제하시겠습니까?");
        if (confirmed) {
          const item = btn.closest(".wishlist-item");
          item.remove();
          alert("상품이 삭제되었습니다.");
        }
      });
    });
  
    buyBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const quantity = btn.parentElement.querySelector(".quantity").value;
        alert(`${quantity}개 상품을 구매합니다.`);
      });
    });
  });
  