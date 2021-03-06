// ITERATION 1

function updateSubtotal(elem) {
  let price = elem.querySelector('.price span').innerHTML;
  let quantity = elem.querySelector('.quantity input').value;
  const multiplyResult = price*quantity;
  elem.querySelector('.subtotal').innerHTML = `$${multiplyResult}`;
  console.log('Calculating subtotal, yey!');
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  const productsArray = [...products];
  productsArray.forEach((elem) => updateSubtotal(elem));

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
