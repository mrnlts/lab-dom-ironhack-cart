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
  const productsArray = [...document.getElementsByClassName('product')].forEach((elem) => updateSubtotal(elem));

  // ITERATION 3
  // const finalValue = [...document.getElementsByClassName('product')].reduce(function(acc, current) {return acc + current});
  const finalValue = [...document.getElementsByClassName('subtotal')].reduce(function (acc, curr) {let result = acc + curr; return result;});
  document.getElementById('total-value').innerHTML = `$${finalValue}`;
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
