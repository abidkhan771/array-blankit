// simple

// const user = 'Steven  Thomas  Williams';
// const username = user.toLowerCase()
//     .split(' ')
//     .map(name =>name[0]).join('');



// console.log(username);


// function
const createUsernames = function(user) {
    const username = user
        .toLowerCase()
        .split(' ')
        .map(name => name[0]).join('');

    return username;
}
console.log(createUsernames('Steven  Thomas  Williams'));