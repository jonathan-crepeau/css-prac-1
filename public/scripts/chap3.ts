// console.log('chap3.js reporting for duty..');

// NOTE - Funciton Definition (below). Cannot be called in a program unless the call is after the definition.

let lunaMeows = function(n: number) {
    let string = '';
    for (let i = 0; i < n; i++) {
        string += "meow ";
    }
    return string;
}

// console.log(lunaMeows(11));


// NOTE - Function Declaration (below). Function declarations are not part of the regular top-to-bottom flow of control. They are hoisted at runtime(?) and as a result can be called anywhere in the program.

function lunaNoises(x) {
    let string = '';
    for (let i = 0; i < x; i++) {
        string += 'Meow ';
    }
    return string;
}

// console.log(lunaNoises(5));


// ANCHOR Temporal Dead Zone Exercises:

// SECTION - Let Keyword

// NOTE - Geting 'undefined' in TDZ:
// {
//     let myPet;
//     console.log(myPet);
//         // returns 'undefined' for being declared with let (above) but not completely initialized --> defaults to 'undefined'
//     myPet = 'Luna';
//     console.log(myPet);
//         // returns 'Luna' for the variable having been completely intialized.
// }

// NOTE - Getting ReferenceError in TDZ:

// {
//     console.log(myDog);
//     let myDog = 'tess';
// }


// SECTION - Const Keyword: 

// NOTE - Cannot declare with 'const' keyword and not completely initialize the variable:
// {
//     const myMom;
//         // throws Uncaught Syntax error for not being initalized at declaration.
//     console.log(myMom);
// }

// {
//     console.log(myDad);
//         // throws ReferenceError for trying to access before initialization
//     const myDad = 'Bruce';
// }


// SECTION - Var Keyword
// {
//     console.log(myFriend);
//         // returns undefined because of 'var' hoisting, not throwing a ReferenceError like 'let' and 'const' if you try to access a variable before it is declared.
//     var myFriend;
//     myFriend = 'Annie';
//     console.log(myFriend);
//         // returns 'Annie'
// }