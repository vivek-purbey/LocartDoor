let carts = document.querySelectorAll(".add-to-cart");

let products = [
    {
        name:'Flour',
        tag:'flour',
        price:60,
        inCart:0
    },
    {
        name:'Fine Flour',
        tag:'fineflour',
        price:50,
        inCart:0
    },
    {
        name:'Rice',
        tag:'rice',
        price:50,
        inCart:0
    },
    {
        name:'Chilli Powder',
        tag:'chillipowder',
        price:200,
        inCart:0
    },
    {
        name:'Turmeric',
        tag:'turmeric',
        price:200,
        inCart:0
    },
    {
        name:'Curry Powder',
        tag:'currypowder',
        price:300,
        inCart:0
    },
    {
        name:'Garlic',
        tag:'garlic',
        price:200,
        inCart:0
    },
    {
        name:'Red Chilli',
        tag:'redchilli',
        price:300,
        inCart:0
    },
    {
        name:'Ginger',
        tag:'ginger',
        price:200,
        inCart:0
    }
]

for( let i=0; i < carts.length; i++){
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector(".cart span").textContent = productNumbers;
    }
}

function cartNumbers(product){
let productNumbers = localStorage.getItem('cartNumbers');

productNumbers = parseInt(productNumbers);

if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers +  1;
} 
else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector(".cart span").textContent = 1;
}

setItems(product);

}

function setItems(product){
    let cartItems = localStorage.getItem('productsInIncart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1 ;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInIncart", JSON.stringify(cartItems) )
}

function totalCost(product){
let cartCost = localStorage.getItem('totalCost');

console.log("My cartcost is ", cartCost);
console.log(typeof cartCost);

if(cartCost != null){
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);
} else {
    localStorage.setItem('totalCost', product.price);
}


}

function displayCart(){
    let cartItems = localStorage.getItem('productsInIncart');
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".product");
    let cartCost = localStorage.getItem('totalCost');
    let shipping = parseInt(50);
    cartCost = parseInt(cartCost)
    let grandTotal = cartCost + shipping;

    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class = "product">
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src="images/${item.tag}.jpg">
                <span>${item.name}</span>
                

                <span><div class="price">₹${item.price}</div></span>
                <div class="quantity">
                <ion-icon class="decrease" name="caret-back-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="caret-forward-outline"></ion-icon>
                </div>
                <div class="total">
                ₹${item.inCart * item.price},00
                </div>
            </div>
            
            `;
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal">
                ₹${cartCost},00
            </h4>
        </div>
        <div class="summary" style="margin:100px; width:100%">
            <div>
                <h5><b>Summary</b></h5>
            </div>
            <hr>
            <div>
                <div >Total Cost: </div>
                <div class="col text-right">₹ ${cartCost},00</div>
            </div>
            <form>
                <p>SHIPPING CHARGE</p> <select>
                    <option class="text-muted">Standard-Delivery- ₹ 50.00</option>
                </select>
                <p>GIVE CODE</p> <input id="code" placeholder="Enter your code">
            </form>
            <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                <div class="col">TOTAL PRICE</div>
                <div class="col text-right" style="width:100%; font-weight:bold;">₹ ${cartCost}+50 = ₹${grandTotal}</div>
            </div> <a href="../LocartDoor Website/checkout_kirtika.html" target="_blank" style="color: azure;"><button class="btn">CHECKOUT</button></a>
        </div>

            
        `;
    }
}

onLoadCartNumbers();
displayCart();