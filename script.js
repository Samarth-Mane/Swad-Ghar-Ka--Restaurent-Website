function flipCard(card) {
    card.classList.toggle('flipped');
  }
  
  function updateQuantity(change, event) {
    event.stopPropagation(); // prevent card flip
    const quantitySpan = event.target.parentElement.querySelector('.quantity-value');
    let currentQty = parseInt(quantitySpan.innerText);
    let newQty = currentQty + change;
    if (newQty < 1) newQty = 1;
    quantitySpan.innerText = newQty;
  }
  
  function goToCart(event) {
    event.stopPropagation(); // prevent card flip
    // Redirect to cart or another page
    window.location.href = "orderdet.html"; // change this to your cart page
  }

  
  function thali(){
    const update = 
  }