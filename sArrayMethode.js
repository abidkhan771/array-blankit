let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// slice methode    remove first element
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(1, 4));
console.log(arr.slice(1, 4));
console.log(arr.slice());
console.log(arr.slice([...arr]));


// splice    is the same methode of slice diffrence is . splice is change the oregnel arr  2. remove the last element

// arr.splice(2);
// console.log(arr);

// reverse      reverse methode is change the oragenal arr 
const arr2 = ['k', 'j', 'i', 'h', 'g']
console.log(arr2.reverse());

// concat  concat is join two array in together
const letters = arr.concat(arr2);
console.log(letters);
//spride opreter
console.log([...arr, ...arr2]);

// join
const name = 'abid'
console.log(arr.join(` hi ${name} `));
console.log(letters.join('-'));