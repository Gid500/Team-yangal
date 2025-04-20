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

  //구매하기
  const initBuy = () => {
    const buyBtns = document.querySelectorAll('.buy-btn');
  
    buyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        alert('구매되었습니다!');
        window.open('https://www.coupang.com', '_blank');
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
  initBuy();
  initShare();
  initTabs();
});


//리뷰
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitReview");
  const reviewText = document.getElementById("reviewText");
  const reviewList = document.getElementById("reviewList");
  const starRating = document.getElementById("starRating");
  const scoreDisplay = document.querySelector(".score");
  const reviewCountDisplay = document.querySelector(".review-count");

  let selectedRating = 0;
  let totalRating = 0;
  let reviewCount = 0;

  const storedUser = localStorage.getItem("user");
  let loggedInUser = null;

  if (storedUser) {
    loggedInUser = JSON.parse(storedUser);
  } else {
    // 로그인 안 된 경우 폼 숨김
    const form = document.querySelector(".review-form");
    form.innerHTML = `<p style="color:gray;">리뷰를 작성하려면 로그인해야 합니다.</p>`;
    return;
  }

  // 별점 클릭 이벤트
  if (starRating) {
    const stars = starRating.querySelectorAll("span");
    stars.forEach((star) => {
      star.addEventListener("click", () => {
        selectedRating = parseInt(star.dataset.value);
        updateStars(selectedRating);
      });
      star.addEventListener("mouseover", () => {
        const hoverValue = parseInt(star.dataset.value);
        stars.forEach((s) => {
          s.classList.toggle("hover", parseInt(s.dataset.value) <= hoverValue);
        });
      });
      star.addEventListener("mouseout", () => {
        stars.forEach((s) => s.classList.remove("hover"));
      });
    });
  }
  

  function updateStars(score) {
    starRating.querySelectorAll("span").forEach((s) => {
      s.classList.toggle("active", parseInt(s.dataset.value) <= score);
    });
  }

  function updateAverage() {
    const average = reviewCount === 0 ? 0 : (totalRating / reviewCount).toFixed(1);
    scoreDisplay.textContent = `${average}점`;
    reviewCountDisplay.textContent = `(${reviewCount}개 리뷰)`;
  }

  // 리뷰 등록
  submitBtn.addEventListener("click", () => {
    const text = reviewText.value.trim();
    if (!text) {
      alert("리뷰 내용을 입력해주세요!");
      return;
    }

    if (selectedRating === 0) {
      alert("별점을 선택해주세요!");
      return;
    }

    const reviewItem = document.createElement("div");
    reviewItem.className = "review-item";

    const reviewMeta = document.createElement("div");
    reviewMeta.className = "review-meta";
    reviewMeta.textContent = `${loggedInUser.userid} | ${new Date().toLocaleDateString()} | ⭐${selectedRating}`;

    const reviewContent = document.createElement("div");
    reviewContent.className = "review-text";
    reviewContent.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-review-btn";
    deleteBtn.textContent = "삭제";
    deleteBtn.addEventListener("click", () => {
      if (confirm("리뷰를 삭제하시겠습니까?")) {
        reviewItem.remove();
        reviewCount--;
        totalRating -= selectedRating;
        updateAverage();
      }
    });

    reviewItem.appendChild(reviewMeta);
    reviewItem.appendChild(reviewContent);
    reviewItem.appendChild(deleteBtn);

    reviewList.prepend(reviewItem);

    totalRating += selectedRating;
    reviewCount++;
    updateAverage();

    reviewText.value = "";
    selectedRating = 0;
    updateStars(0);
  });
});
