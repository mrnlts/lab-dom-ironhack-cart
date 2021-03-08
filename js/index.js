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
    if (finalPrice.length === 0) {
      let finalValue = 0;
      document.getElementById('total-value').innerHTML = `Total: $${finalValue}`;
    } else {
      let finalValue = [...finalPrice].reduce(function(arr, curr) {return arr + curr;});
      document.getElementById('total-value').innerHTML = `Total: $${finalValue}`;
    }
  }
  updateTotal();
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const targetValue = ((target.parentElement.parentElement.querySelector('.price span').innerHTML));
  console.log('The target in remove is:', target);
  target.parentElement.parentElement.remove();
  // const finalValue = finalPrice.reduce(function(arr, curr) {return arr + curr});
  // document.getElementById('total-value').innerHTML = `Total: $${finalValue-targetValue}`;
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector('.create-product td input');
  const productPrice = productName.nextElementSibling;
  const table = document.getElementsByClassName('product').lastElementChild;
  newproduct = document.createElement('tr');
  newproduct.innerHTML = `<td class="name"><span>${productName}</span></td><td class="price">$<span>${productPrice}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`;
  table.appendChild(newproduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductsBtn = document.querySelectorAll('.btn-remove'); 
  removeProductsBtn.forEach((btn) => btn.addEventListener('click', removeProduct));
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
  //... your code goes here
});
