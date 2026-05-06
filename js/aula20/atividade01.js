//faça uma página onde o usuário possa cadastrar um produto. Esse produto deve conter uma imagem ( que terá uma URL ), um nome, uma descrição e um preço.
//Informando todos esses dados ao submeter o formulário o produto será adicionado ao array (no formato de objeto) e será renderizado na tela em um card bootstrap.

//IMPORTANTE: valide se o preço do produto é maior que zero. Caso seja menor que zero, exiba uma mensagem de erro abaixo do campo de preço, informando que o preço deve ser maior que zero.
//Veriique se o produto já existe no array. Caso exista, exiba uma mensagem de erro abaixo do campo de nome, informando que o produto ja foi cadastrado.
//usando o método find() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const form = document.getElementById('product-form');
const products = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const imageUrl = document.getElementById('image-url').value;
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = parseFloat(document.getElementById('price').value);
    const errorPrice = document.getElementById('error-price');
    const errorName = document.getElementById('error-name');

    errorPrice.textContent = '';
    errorName.textContent = '';
    if (price <= 0) {
        errorPrice.textContent = 'O preço deve ser maior que zero.';
        return;
    }
    const existingProduct = products.find(product => product.name === name);
    if (existingProduct) {
        errorName.textContent = 'O produto já foi cadastrado.';
        return;
    }
    const product = {
        imageUrl,
        name,
        description,
        price
    };
    products.push(product);
    renderProducts();
});

function renderProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">Preço: R$ ${product.price.toFixed(2)}</p>
            </div>
        `;
        productContainer.appendChild(card);
    });
}