// task 1

// const heights2 = [167, 190, 120, 165, 137];

// function lowestNumber(numbers){
//     let lowest = numbers[0];
//     for(const number of numbers){
//         if(number < lowest){
//             lowest = number;
//         }
//     }
//     return lowest;
// }

// const lowest = lowestNumber(heights2);
// console.log('Lowest number is: ', lowest);

//task 2

// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 's'];

// function miniName(names){
//     let littleName = names[0];
//     for(const name of names){
//         if(littleName.length > name.length){
//             littleName = name;
//         }
//     }
//     return littleName;
// }

// const shortName = miniName(heights2);
// console.log('the shortest name is : ', shortName);

//task 3

// function price(laptop, tablet, mobile){
//     const laptopPrice = 35000;
//     const tabletPrice = 15000;
//     const mobilePrice = 20000;

//     const totalLaptopPrice = laptop * laptopPrice;
//     const totalTabletPrice = tablet * tabletPrice;
//     const totalMobilePrice = mobile * mobilePrice;

//     const totalPrice = totalLaptopPrice + totalTabletPrice + totalMobilePrice;

//     return totalPrice;
// }

// const totalMoney = price(1, 1, 2);
// console.log('total price is: ', totalMoney, 'taka');

//task 4

// const phones = [
//     {model: "PhoneA", brand: "Iphone", price: 95000},
//     {model: "PhoneB", brand: "Samsung", price: 40000},
//     {model: "PhoneC", brand: "Oppo", price: 26000},
//     {model: "PhoneD", brand: "Nokia", price: 35000},
//     {model: "PhoneE", brand: "Iphone", price: 105000},
//     {model: "PhoneF", brand: "HTC", price: 48000},
// ]

// function getAvgPrice(mobiles){
//     let totalPrice = 0;
//     for(const mobile of mobiles){
//         // console.log(mobile.price);
//         totalPrice += mobile.price
//     }
//     console.log(totalPrice);

//     const count = mobiles.length
//     console.log(count);
//     const avg = totalPrice / count;
//     console.log('Average price of the all phone is: ', (parseFloat(avg.toFixed(3))), 'taka');
// }

// const mobile = getAvgPrice(phones)

//task 5

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function allEmployees(imployees) {
  // console.log(imployees[0]);
  // let peremployee = imployees[0];
  let totalIncrement;
  let totalSalary;
  let totalEmployeeSalary = [];
  for (const imployee of imployees) {
    // console.log(imployee.experience);
    if (imployee === imployees[0]) {
      // console.log(imployee);
      totalIncrement = imployee.experience * imployee.increment;
      // console.log(totalIncrement);
      totalSalary = imployee.starting + totalIncrement;
      totalEmployeeSalary.push(totalSalary);
    } else if (imployee === imployees[1]) {
      totalIncrement = imployee.experience * imployee.increment;

      totalSalary = imployee.starting + totalIncrement;
      totalEmployeeSalary.push(totalSalary);
    } else if (imployee === imployees[2]) {
      totalIncrement = imployee.experience * imployee.increment;

      totalSalary = imployee.starting + totalIncrement;
      totalEmployeeSalary.push(totalSalary);
    } else if (imployee === imployees[3]) {
      totalIncrement = imployee.experience * imployee.increment;

      totalSalary = imployee.starting + totalIncrement;

      totalEmployeeSalary.push(totalSalary);
    }
  }
  //   console.log(totalEmployeeSalary);
  let sum = 0;
  for (const imployee of totalEmployeeSalary) {
    sum = sum + imployee;
  }
  console.log('Total salary need to provide in a month is:', sum,'taka');
}

const totalEmployeeSalary = allEmployees(employees);
