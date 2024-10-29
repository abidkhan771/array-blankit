// const movements = [200, -200, 340, -300, -20, 50, 400, -460];

// console.log(movements);

// // -- equality ----- include Method
// console.log(movements.includes(-200));

// // condition ----- some methode
// console.log(movements.some(mov => mov === 2000));


// const anyData = movements.some(mov => mov > 0);
// console.log(anyData);

// // ---every 
// console.log(movements.every(mov => mov > -400));

// //  --- separate callBack

// const deposit = mov => mov > 10000;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));


// ----flat
const arr = [
    [1, 2, 3],
    [4, 5, 6], 5, 8
];
console.log(arr.flat());

const arr2 = [
    [
        [5, 6], 6
    ],
    [4, [9, [7]]]
]
console.log(arr2.flat(3));

const overalBalance = arr.map(acc => acc.arr2).flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);


//------ sorting array.,,, accinding order only string
const a = ['khan', 'toofan', 'abid'];
console.log(a.sort());

// return <0 ,a,b
// return <0 ,b,a
const c = [2, 4, -5, 7, -7]
    //number work through if stetment

//ascending order
c.sort((d, e) => {
    if (d > e) return 1;
    if (e > d) return -1;
})
console.log(c);
c.sort((d, e) => d - e);
console.log(c);



//descending order
c.sort((d, e) => {
    if (d > e) return -1;
    if (e > d) return 1;
})
console.log(c);

c.sort((d, e) => e - d);
console.log(c);