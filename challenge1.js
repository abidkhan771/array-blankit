// const checkDoges = function(dogJulia, dogsKate) {
//     const dogsJuliaCorrected = dogJulia.slice();
//     dogsJuliaCorrected.splice(0, 1);
//     dogsJuliaCorrected.splice(-2);
//     const dogs = dogsJuliaCorrected.concat(dogsKate);
//     console.log(dogs);


//     dogs.forEach(function(dog, i) {
//         if (dog >= 3) {
//             console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);

//         } else {
//             console.log(`Dog number ${i +1} is still a puppy `);

//         }
//     })

// }
// checkDoges([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// checkDoges([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);




//---------challenge no 2


// const calcAverageHumanAge = function(ages) {
//     const humanAge = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
//     const adults = humanAge.filter(age => age >= 18);
//     console.log(humanAge);
//     console.log(adults);

//     const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//     return average;

// }
// const av1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const av2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, ]);

// console.log(av1, av2);



// ----------challenge no 3

// const calcAverageHumanAge = ages =>
//     ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);



// const av1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const av2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, ]);

// console.log(av1, av2);




// hashir give a challenge
// const no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const a = no.map(val => val * 2)
// console.log(a);
// const b = a.filter(mov => mov > 10);
// console.log(b);


// const reduces = b.reduce((acc, cur) => acc + cur, 0);
// console.log(reduces);

// const balance = a.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);



// --------challange  no  #4


const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'john'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.     we will add anthor varible through arr.F (recFood)
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah dog is eating ${
    dogSarah.curFood >dogSarah.recFood ? 'much':'little'}`);

// 3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join('and')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join('and')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6.
const checkEatingOkay = dog =>
    dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

//7.
console.log(dogs.filter(checkEatingOkay));

//8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);