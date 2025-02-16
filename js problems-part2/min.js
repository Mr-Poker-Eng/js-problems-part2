const price = [20000, 16000, 50000, 100000, 12000, 30000, 35000];

// function getMin(numbers){
//     let min = numbers[0];
//     for(const num of numbers){
//     if(num < min){
//         min = num;
//     }
//     }
//     return min;
// }

// const cheap = getMin(price);
// console.log('cheapest one is: ', cheap);


// total price
function sum(number){
    let summ = 0;
    // for(let i=0; i<number.length; i++){
    //     summ += number[i];
    // }
    for(const num of number){
        summ = summ + num;
    }
    return summ;
}

const total = sum(price);
console.log(total);