<script>
    const cart = [];

    function addToCart(productName, price) {
        cart.push({ name: productName, price: price });
    updateCart();
        }

    function updateCart() {
            const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '<h2>Shopping Cart</h2>';

    let total = 0;

    for (const item of cart) {
        total += item.price;
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.innerHTML = `<span>${item.name} - R${item.price.toFixed(2)}</span>
    <button onclick="removeFromCart('${item.name}')">Remove</button>`;

    cartElement.appendChild(itemDiv);
            }

    cartElement.innerHTML += `<strong>Total: R${total.toFixed(2)}</strong>`;
        }

        function removeFromCart(productName) {
            const index = cart.findIndex(item => item.name === productName);
            if (index !== -1) {
                cart.splice(index, 1);
                updateCart();
            }
        }

        function checkout() {
            const cardNumber = document.getElementById('cardNumber').value;
            const expiration = document.getElementById('expiration').value;
            const cvv = document.getElementById('cvv').value;

            if (cardNumber && expiration && cvv) {
                alert("Checkout Successful. Thank you for your purchase!");

                cart.length = 0;
                updateCart();
            } else {
                alert("Please enter card details before checking out.");
            }
        }
    </script>
