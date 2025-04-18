//버튼 눌러서 필터
const filterMenuInit = () => {
    const filters = document.querySelectorAll('[data-filter-id]');

    filters.forEach(filter => {
        const filterBtns = [...filter.querySelectorAll('[data-filter]')].filter(el => el.nodeName === 'BUTTON');
        const productItems = filter.querySelectorAll('.product');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filterType = btn.getAttribute('data-filter');

                filterBtns.forEach(btn => btn.classList.remove('active'));
                btn.classList.add('active');

                productItems.forEach(item => {
                    const category = item.getAttribute('data-category') || '';
                    if (filterType === 'all' || category.split(' ').includes(filterType)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });
};

filterMenuInit();
//찜
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




initWishlist();
//장바구니
const initCart = () => {
  const cartBtns = document.querySelectorAll('.cart-btn');

  cartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const product = btn.closest('.product');
      const productId = product.getAttribute('data-product-id');

      let cart = JSON.parse(localStorage.getItem('orderlist')) || [];

      if (!cart.includes(productId)) {
        cart.push(productId);
        alert('장바구니에 상품을 담았습니다.');
      } else {
        alert('이미 장바구니에 있는 상품입니다.');
      }

      localStorage.setItem('orderlist', JSON.stringify(orderlist));
    });
  });
};

initCart();

