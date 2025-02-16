const numbers = [300, 100, 700, 1200];

const Product = [
    { name: 'shampoo', price: 300},
    { name: 'chiruni', price: 100},
    { name: 'shirt', price: 700},
    { name: 'pant', price: 1200},
]

function getShoppingTotal(mals){
    let total = 0;
    for(const mal of mals){
        total = total + mal.price;
    }
    return total;
}

const total = getShoppingTotal(Product);
console.log('total ajke khosabe: ', total);