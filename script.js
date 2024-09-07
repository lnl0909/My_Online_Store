let cartCount = 0;
let totalPrice = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const product = event.target.closest('.product');
        const price = parseInt(product.getAttribute('data-price'));

        cartCount++;
        totalPrice += price;

        document.getElementById('cart-count').textContent = cartCount;
        document.getElementById('total-price').textContent = totalPrice;
    });
});