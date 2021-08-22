// added event all button 

document.getElementById('memory-8gb').addEventListener('click', function () {
  updatePrice('extra-memory-cost', 0)
});

document.getElementById('memory-16gb').addEventListener('click', function () {
  updatePrice('extra-memory-cost', 180)
});

document.getElementById('storage-256gb').addEventListener('click', function () {
  updatePrice('extra-storage-cost', 0)
});

document.getElementById('storage-512gb').addEventListener('click', function () {
  updatePrice('extra-storage-cost', 100)
});

document.getElementById('storage-1tb').addEventListener('click', function () {
  updatePrice('extra-storage-cost', 180)
});

document.getElementById('delivery-prime').addEventListener('click', function () {
  updatePrice('delivery-cost', 0)
});

document.getElementById('delivery-paid-extra').addEventListener('click', function () {
  updatePrice('delivery-cost', 20)
});

// function section
 
function updatePrice(element,price){
  let productCost = document.getElementById(element);
  productCost.innerText = price;
  // best price 
  const existingPrice = document.getElementById("best-price")
  const prceValue = parseInt( existingPrice.innerText);

  //  extra memory cost 
  const memory = document.getElementById('extra-memory-cost')
  const memoryCost = parseInt(memory.innerText);

  //  extra storage cost 
  const storage = document.getElementById('extra-storage-cost')
  const storageCostExtra = parseInt(storage.innerText);

  // delivery charge
  const delivery = document.getElementById('delivery-cost')
  const deleveryCharge = parseInt(delivery.innerText);

  let totalExtraPrice = prceValue + memoryCost + storageCostExtra + deleveryCharge;
  
  // total price 
  const amount = document.getElementById('extra-total-cost')
  amount.innerText = totalExtraPrice;
  // extra total price
  const extraTotalPrice = document.getElementById('extra-total')
  extraTotalPrice.innerText = amount.innerText;
};


//  if using promo code 

document.getElementById('promo-code').addEventListener('click', function () {
  const promoCode = document.getElementById("promo-input")
  const promoCodeInput = promoCode.value
  
  const amount = document.getElementById('extra-total-cost')
  const extraTotal = document.getElementById('extra-total')
  let finalAmountPrice = parseInt(amount.innerText);
  if (promoCodeInput == 'stevekaku') {
    const discount = (finalAmountPrice / 100) * 20;
    extraTotal.innerText = finalAmountPrice - discount;
  }
  promoCode.value = '';
});



