// order.js

document.addEventListener("DOMContentLoaded", () => {
  const deleteBtns = document.querySelectorAll(".delete-btn");
  const reviewBtns = document.querySelectorAll(".write-btn");

  deleteBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const confirmDelete = confirm("이 항목을 주문내역에서 삭제하시겠습니까?");
      if (confirmDelete) {
        const item = btn.closest(".order-item");
        item.remove();
        alert("주문 항목이 삭제되었습니다.");
      }
    });
  });

  reviewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("리뷰 작성 페이지로 이동합니다.");
      // window.location.href = "review.html";
    });
  });
});
