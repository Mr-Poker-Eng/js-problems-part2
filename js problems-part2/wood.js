/* 
chair --> 3 cft
table --> 10 cft
bed --> 50 cft
*/

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWood;
}

// const wood = woodQuantity(2, 1, 2);
// console.log('wood needed: ', wood, 'cft');

function price(shirt, pant, shoe){
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const totalShirtPrice = shirt * shirtPrice;
    const totalPantPrice = pant * pantPrice;
    const totalShoePrice = shoe * shoePrice;

    const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
    return totalPrice;
}

const moneyNeed = price(3, 2, 2);
console.log('total price is : ', moneyNeed, 'taka');