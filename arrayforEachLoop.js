// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i+1} : You deposited ${movement}`);

//     } else {
//         console.log(`Movement ${i+1} : You withdre ${Math.abs(movement)}`);

//     }
// }

// //  forEach Looping

// console.log('--------forEach -----------\n\n\n-');

// movements.forEach(function(mov, i, arr) {
//     if (mov > 0) {
//         console.log(`Movement ${i+1} : You deposited ${mov}`);

//     } else {
//         console.log(`Movement ${i+1} : You withdre ${Math.abs(mov)}`);

//     }
// })

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
    console.log(`${key}:${value}`);

})

// set

const currenciesUnique = new Set(['usd', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map) {
    console.log(`${value}: ${value}`);

})