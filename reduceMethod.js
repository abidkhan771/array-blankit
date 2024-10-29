const movements = [200, -200, 340, -300, -20, 50, 400, -460];
console.log(movements);


// accumulator -> snowball

// function reduce   add in array one index to anthor index



// const balance = movements.reduce(function(acc, cur, i, arr) {
//     console.log(`Iteration ${i}: ${acc}`);

//     return acc + cur;

// }, 0);
// console.log(balance);



//----------- arrwo function in reduce method------
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

//---------for loop in simple

let balance = 0;
for (const mov of movements) balance += mov;
console.log(balance);

// maximum value

const max = movements.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
}, movements[0]);
console.log(max);