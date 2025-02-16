const phones = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'xoami', price: 18000, camera: '12mp', color: 'black'},
    {name: 'oppo', price: 30000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
    {name: 'Walton', price: 10000, camera: '12mp', color: 'black'},
    {name: 'HTC', price: 27000, camera: '12mp', color: 'black'},
]


// function getCheapestPhone(mobiles){
//     let min = mobiles[0];
//     for(const mobile of mobiles){
//         if(mobile.price < min.price){
//             min = mobile;
//         }
//     }
//     return min;
// }

// const cheap = getCheapestPhone(phones);
// console.log('Chipest Phone is: ', cheap);


function getexpensivePhone(mobiles){
    let max = mobiles[0];
    for(const mobile of mobiles){
        if(mobile.price > max.price){
            max = mobile;
        }
    }
    return max;
}

const expensive = getexpensivePhone(phones);
console.log('Expensive Phone is: ', expensive);