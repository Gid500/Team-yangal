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


function renderWishlist() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const container = document.querySelector(".wishlist");

  // 찜한 상품만 필터링
  const filtered = products.filter(p => wishlist.includes(p.id));

  // 찜한 상품이 없을 경우
  if (filtered.length === 0) {
    container.innerHTML = '<li>찜한 상품이 없습니다.</li>';
    return;
  }

  // 상품 렌더링
  container.innerHTML = ''; // 기존 항목 제거
  filtered.forEach(p => {
    const li = document.createElement('li');
    li.className = 'wishlist-item';
    li.innerHTML = `
      <div class="item-image">
        <img style="width: 80px; height: 80px" src="${p.image}" alt="${p.name}" />
      </div>
      <div class="item-details">
        <p class="item-name">${p.name}</p>
        <p class="item-price">${p.price.toLocaleString()}원</p>
      </div>
      <div class="item-actions">
        <button class="remove-btn" data-id="${p.id}">삭제</button>
      </div>
    `;
    container.appendChild(li);
  });

  bindButtons(); // 삭제/구매 버튼 이벤트 다시 바인딩
}

function bindButtons() {
  const removeBtns = document.querySelectorAll(".remove-btn");
  const buyBtns = document.querySelectorAll(".buy-btn");

  removeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const confirmed = confirm("이 상품을 찜 목록에서 삭제하시겠습니까?");
      if (confirmed) {
        const productId = btn.getAttribute("data-id");

        // localStorage에서 제거
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        wishlist = wishlist.filter(id => id !== productId);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        // 화면에서 제거
        btn.closest(".wishlist-item").remove();

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
  renderWishlist();
});





/*
function renderWishlist() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
  const products = [
    {
      id: 'p001',
      name: '센트룸 에너지B 60정',
      price: 21340,
      image: 'image1.png',
    },
    {
      id: 'p002',
      name: '센트룸 에너지 60정',
      price: 21340,
      image: 'image1.png',
    },
  ];

  const filtered = products.filter(product => wishlist.includes(product.id));
  const container = document.querySelector('#wishlist-container');

  filtered.forEach(product => {
    const item = document.createElement('div');
    item.innerHTML = `<h3>${product.name}</h3><p>${product.price}원</p>`;
    container.appendChild(item);
  });
}
*/
