// make a function in three array webDev,faltterDev,desinDev
// i will add name to show me personGroup in complet array 


const dev = (name) => {
    const webDev = ['ahmad', ['hassan', 'samad'],
        ['uzair', 'anas', 'toofan'], 'muazi', 'hashair'
    ];

    // level 1 = Internee.
    // level 2 = Developer




    // Level 3 = Team Lead.



    //    ----------destrcturing----
    const [, second] = [...webDev]
    const [, thired] = [...second]

    if (webDev.includes(name)) {
        console.log(`${name } is a Internee`);
    } else if (second.includes(name)) {
        console.log(`${name } is a developer`);

    } else if (thired.includes(name)) {
        console.log(`${name } is a team lead`);

    } else {
        console.log(` ${name} is  unValide`);
    }

    // const [...Internee] = [first, thrid];
    // console.log(Internee);
    // const [a, b, c] = [...second];
    // console.log(a, b);







    // ---------if else ------

    // if (webDev.includes(name)) {
    //     console.log(`${name } is a Internee`);
    // } else if (webDev[1].includes(name)) {
    //     console.log(`${name } is a developer`);
    // } else if (webDev[1][1].includes(name)) {
    //     console.log(`${name } is a Team Lead`);
    // } else {
    //     console.log(` ${name} is  unValide`);
    // }

    //---------- for of----------

    // for (const value of Object.values(webDev)) {

    //     if (value.includes(name)) {
    //         console.log(`${name } is a Internee`);
    //     } else if (typeof value === 'object') {

    //         for (const value1 of Object.values(value)) {


    //             if (value1.includes(name)) {
    //                 console.log(`${name } is a developer`);

    //             } else if (typeof value1 === 'object') {
    //                 for (const value2 of Object.values(value1)) {

    //                     if (value2.includes(name)) {
    //                         console.log(`${name } is a team leader`);
    //                     }
    //                 }

    //             }
    //         }
    //     }

    // }




};
dev('muazi')

//['ahmad', ['hassan', ['uzair', 'anas', 'toofan'], 'samad'], 'muazi', 'hashair'];




// const w = find(acc => ahmad === webDev);
// console.log(w);




// const search = dev(find(webDev.includes('ahmad')));
// console.log(search);

// console.log(dev);

// const w = find(acc => 'ahmad' === webDev);
// console.log(w)