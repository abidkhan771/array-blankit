const movements = [200, -200, 340, -300, -20, 50, 400, -460];

const deposits = movements.filter(function(mov) {
    return mov > 0;
});
console.log(movements);
console.log(deposits);
const depositsFor = [];

for (const mov of movements)
    if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

// filter method 

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);


// for loop in simple method
const withdrawalFor = [];

for (const mov of movements)
    if (mov < 0) withdrawalFor.push(mov);
console.log(withdrawalFor);


// find  give the first index  , find the first element


const withdrawals2 = movements.find(mov => mov < 0);
console.log(withdrawals2);


// diffrence between fliter and find  
// filter is finde the complet array 
// find is find the first index