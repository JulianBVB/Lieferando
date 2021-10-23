let cart = []
let prices = []
let add = []

let cartMenu = ['Pizza Margherita', 'Pizza Salami', 'Pizza Döner'];
let cartPrices = [5.00, 4.50, 6.50];
let foodDescription = [
    'Wahl aus: mit Ananas, mit Broccoli, mit Chilischoten, mit Cocktailtomaten und mehr.',
    'Wahl aus: Small, Ø 26cm oder Large, Ø 32cm.',
    'mit Dönerfleisch, grünen Peperoni, Zwiebeln und Knoblauchsauce',
]

/**
 * Add a food
*/
function AddFood(n) {
    let food = document.getElementById('cart' + n).innerHTML;
    let price = +document.getElementById('price' + n).innerHTML;

    //Die Stelle wo sich food cart Array befindet
    let position = cart.indexOf(food);

    if (position == -1) {
        PushArrays(n);
    } else {
        add[position]++
    }

    hideEmptyCart();
    ShowCart();
}

/**
 * Show basket
*/
function ShowCart() {
    let sum = 0;
    document.getElementById('cart').innerHTML = '';
    for (let i = 0; i < cart.length; i++) {
        let result = prices[i] * add[i];
        sum += result
        document.getElementById('cart').innerHTML += `
        <div class="order-items" id="position-cart${[i]}">
            <div class="cart1">
                <li id="item-amount${[i]}">${add[i]}</li>
                <li>x</li>
            </div>

            <div class="cart2">
                <li>${cart[i]}</li>
            </div>

            <div class="cart3">
                <li><button onclick="ItemPlus(${[i]})">+</button></li>
                <li><button onclick="ItemMinus(${[i]})">-</button></li>
            </div>

            <div class="cart3">
                <li id="item-sum(${[i]})">${result.toFixed(2).replace(".", ",")}</li>
                <li>€</li>
                <span class="material-icons-outlined" onclick="deleteCart(${[i]})">delete</span>
            </div>
        </div>
        `;
    }

    if (sum >= 20) {
        document.getElementById('minimum-order').classList.add('d-none');
        document.getElementById('order-button').classList.remove('d-none');

    } else {
        document.getElementById('minimum-order').classList.remove('d-none');
        document.getElementById('order-button').classList.add('d-none');

    }

    document.getElementById('total-sum').innerHTML = sum.toFixed(2).replace(".", ",");
    document.getElementById('cart-sum').classList.remove('d-none');
}

/**
 * Close container with information for the empty basket
*/
function hideEmptyCart() {
    document.getElementById('empty-cart').classList.add('d-none');
}


/**
 * Cart position plus one 
 * @param n {integer} plus one
*/
function ItemPlus(n) {
    add[n]++;
    ShowCart();
}


/**
 * Cart position minus one 
 * @param n {integer} minus one
*/
function ItemMinus(n) {
    if (add[n] == 1) {
        add[n] == 1
    } else {
        add[n]--;
    }
    ShowCart();
}


/**
 * Push the Arrays with names, prices and amount
 *  * @param n {integer} plus one
*/
function PushArrays(n) {
    let food = document.getElementById('cart' + n).innerHTML;
    let price = +document.getElementById('price' + n).innerHTML;
    cart.push(food);
    prices.push(price);
    add.push(1);
}


/**
 * Delete a position in the basket
*/
function deleteCart(n) {
    let deleteDiv = document.getElementById('position-cart' + n);
    cart.splice(n, 1);
    prices.splice(n, 1);
    add.splice(n, 1);
    deleteDiv.remove(n);
    ShowCart();
}


/**
 * Open basket on mobile
*/
function openBasket() {
    document.getElementById('basket-mobile').classList.remove('d-none-mobile');

}



/**
 * Close basket on mobile
*/
function exitBasket() {
    document.getElementById('basket-mobile').classList.add('d-none-mobile');

}

/**
 * Show and close Popup
*/
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}


/**
 * loading all receipts container
*/
function loadReceipts() {


    document.getElementById('foods-details').innerHTML = '';
    for (let i = 0; i < cartMenu.length; i++) {
        document.getElementById('foods-details').innerHTML += `
    <div class="foods-detail">
        <div class="first-line">
            <div class="foods-name">
                <p id="cart${[i]}">${cartMenu[i]}</p>
            </div>
            <span onclick="AddFood(${[i]})" class="material-icons-outlined">
                add_circle
            </span>
        </div>

        <div class="foods-description">
        ${foodDescription[i]}
        </div>

        <div class="foods-price">
            <p id="price${[i]}">${cartPrices[i]}</p>
            <p>€</p>
        </div>
    </div>

    `;
    }
}