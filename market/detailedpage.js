document.addEventListener("DOMContentLoaded", () => {
  // 찜 버튼 기능
  const initWishlist = () => {
    const wishBtns = document.querySelectorAll('.wishlist-btn');

    wishBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const product = btn.closest('.product');
        const productId = product.getAttribute('data-product-id');
        btn.classList.toggle('active');
        btn.textContent = btn.classList.contains('active') ? '❤️' : '🤍';

        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (btn.classList.contains('active')) {
          if (!wishlist.includes(productId)) wishlist.push(productId);
        } else {
          wishlist = wishlist.filter(id => id !== productId);
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
      });
    });
  };

  // 장바구니 기능
  const initCart = () => {
    const cartBtns = document.querySelectorAll('.cart-btn');

    cartBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const product = btn.closest('.product');
        const productId = product.getAttribute('data-product-id');

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (!cart.includes(productId)) {
          cart.push(productId);
          alert('장바구니에 상품을 담았습니다.');
        } else {
          alert('이미 장바구니에 있는 상품입니다.');
        }

        localStorage.setItem('cart', JSON.stringify(cart));
      });
    });
  };

  // 공유 버튼 기능
  const initShare = () => {
    const shareBtns = document.querySelectorAll('.share-btn');

    shareBtns.forEach(btn => {
      btn.addEventListener('click', async () => {
        const url = window.location.href;

        if (navigator.share) {
          try {
            await navigator.share({ title: document.title, url });
          } catch (err) {
            console.error("공유 실패:", err);
          }
        } else {
          await navigator.clipboard.writeText(url);
          alert("링크가 복사되었습니다!");
        }
      });
    });
  };

  // 탭 기능
  const initTabs = () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-tab");

        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        tabContents.forEach(c => {
          c.style.display = c.id === target ? "block" : "none";
        });
      });
    });
  };

  // 초기화 실행
  initWishlist();
  initCart();
  initShare();
  initTabs();
});
