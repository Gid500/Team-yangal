// cart.js

document.addEventListener("DOMContentLoaded", () => {
  const deleteBtns = document.querySelectorAll(".delete-btn");
  const reviewBtns = document.querySelectorAll(".write-btn");

  deleteBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const confirmDelete = confirm("이 항목을 카트목록에서 삭제하시겠습니까?");
      if (confirmDelete) {
        const item = btn.closest(".cart-item");
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


const products = [
  {
    id: 'p001',
    name: '센트룸 에너지B 60정',
    price: 21340,
    image: '../market/images/image1.png',
  },
  {
    id: 'p002',
    name: '에너지솔루션 60정',
    price: 18500,
    image: '../market/images/image2.png',
  },
  {
    id: 'p003',
    name: '고려은단 비타민C1000 120정 (4개월분)',
    price: 12900,
    image: '../market/images/image3.png',
  },
  {
    id: 'p004',
    name: '지엠팜 이너풀 비타민씨 90포',
    price: 30000,
    image: '../market/images/image4.png',
  },
  {
    id: 'p005',
    name: '지엠팜 더스트롱칼슘 60정',
    price: 25000,
    image: '../market/images/image5.png',
  },
  {
    id: 'p006',
    name: '솔가 츄어블 칼슘 500mg (120정/4개월)',
    price: 36400,
    image: '../market/images/image6.png',
  },
  {
    id: 'p007',
    name: '종근당건강 아이클리어 루테인지아잔틴 오메가3 60캡슐',
    price: 23900,
    image: '../market/images/image7.png',
  },
  {
    id: 'p008',
    name: '아이원 루테인 지아잔틴 미니 180캡슐',
    price: 39700,
    image: '../market/images/image8.png',
  },
  {
    id: 'p009',
    name: '프로메드 아이프레시 60캡슐',
    price: 35100,
    image: '../market/images/image9.png',
  },
  {
    id: 'p010',
    name: '락토핏 코어 30포 (1개월분)',
    price: 14900,
    image: '../market/images/image10.png',
  },
  {
    id: 'p011',
    name: '종근당건강 프로메가 알티지 오메가3 듀얼 40 캡슐 (20일분)',
    price: 14900,
    image: '../market/images/image11.png',
  },
  {
    id: 'p012',
    name: '[솔가] 엽산 400 100정',
    price: 18200,
    image: '../market/images/image12.png',
  },
  {
    id: 'p013',
    name: '뉴트리가든 마그네슘 맥스 400mg 120정',
    price: 16900,
    image: '../market/images/image13.png',
  },
  {
    id: 'p014',
    name: '칼슘 마그네슘 아연 비타민D 90정 x 4병',
    price: 46900,
    image: '../market/images/image14.png',
  },
  {
    id: 'p015',
    name: '아임비타 멀티비타민 이뮨샷 30병 1박스 (30일분)',
    price: 75000,
    image: '../market/images/image15.png',
  },
];



function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.querySelector(".cart");

  // 찜한 상품만 필터링
  const filtered = products.filter(p => cart.includes(p.id));

  // 찜한 상품이 없을 경우
  if (filtered.length === 0) {
    container.innerHTML = '<li>카트에 담은 상품이 없습니다.</li>';
    return;
  }

  // 상품 렌더링
  container.innerHTML = ''; // 기존 항목 제거
  filtered.forEach(p => {
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <div class="item-image">
        <img style="width: 80px; height: 80px" src="${p.image}" alt="${p.name}" />
      </div>
      <div class="item-details">
        <p class="item-name">${p.name}</p>
        <p class="item-price">${p.price.toLocaleString()}원</p>
      </div>
      <div class="item-actions">
        <input type="number" class="quantity" min="1" value="1" />
        <button class="buy-btn" data-id="${p.id}">구매하기</button>
        <button class="remove-btn" data-id="${p.id}">삭제</button>
      </div>
    `;
    container.appendChild(li);
  });
  
  //구매하기 버튼 누르면 상세페이지로 이동
  container.addEventListener("click", function (e) {
    if (e.target.classList.contains("buy-btn")) {
      const productId = e.target.dataset.id;
      // 숫자만 추출 후 정수로 변환
      const idNumber = parseInt(productId.replace(/\D/g, "")); 

      window.location.href = `../market/DetailedPage_${idNumber}.html`;
    }
  });

  bindButtons(); // 삭제/구매 버튼 이벤트 다시 바인딩
}

function bindButtons() {
  const removeBtns = document.querySelectorAll(".remove-btn");
  const buyBtns = document.querySelectorAll(".buy-btn");

  removeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const confirmed = confirm("이 상품을 카트 목록에서 삭제하시겠습니까?");
      if (confirmed) {
        const productId = btn.getAttribute("data-id");

        // localStorage에서 제거
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter(id => id !== productId);
        localStorage.setItem("cart", JSON.stringify(cart));

        // 화면에서 제거
        btn.closest(".cart-item").remove();

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
}


document.addEventListener("DOMContentLoaded", () => {
  renderCart();
});