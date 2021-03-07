// ITERATION 1

function updateSubtotal(i) {
  const price = i.querySelector('.price span').innerHTML;
  const quantity = i.querySelector('.quantity input').value;
  const multiplyResult = price*quantity;
  i.querySelector('.subtotal').innerHTML = `$${multiplyResult}`;
  console.log('Calculating subtotal, yey!');
}

function calculateAll() {
  // ITERATION 2
  const finalPrice = [];
  const products = [...document.getElementsByClassName('product')].forEach(function(i) {
    updateSubtotal(i);
    finalPrice.push(Number((i.querySelector('.subtotal').innerHTML).slice(1)));
  });

  // ITERATION 3
  function updateTotal () {
    const finalValue = finalPrice.reduce(function(arr, curr) {return arr + curr});
    document.getElementById('total-value').innerHTML = `Total: $${finalValue}`;
  }

  updateTotal();
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductsBtn = document.querySelectorAll('.btn-remove'); 
  removeProductsBtn.forEach((btn) => btn.addEventListener('click', removeProduct));

  //... your code goes here
});
