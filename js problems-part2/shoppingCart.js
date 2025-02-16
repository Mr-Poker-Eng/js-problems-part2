const product = [
    { name: 'shampoo', price: 300, quantity: 5},
    { name: 'chiruni', price: 100, quantity: 1},
    { name: 'shirt', price: 700, quantity: 2},
    { name: 'pant', price: 1200, quantity: 3},
]

function cartTotal (products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const shoppingcart = cartTotal(product);
console.log(shoppingcart);