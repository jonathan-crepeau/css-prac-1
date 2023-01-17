// console.log('chap3.js reporting for duty..');
// NOTE - Funciton Definition (below). Cannot be called in a program unless the call is after the definition.
let lunaMeows = function (n) {
    let string = '';
    for (let i = 0; i < n; i++) {
        string += "meow ";
    }
    return string;
};
// console.log(lunaMeows(11));
// NOTE - Function Declaration (below). Function declarations are not part of the regular top-to-bottom flow of control. They are hoisted at runtime(?) and as a result can be called anywhere in the program.
function lunaNoises(x) {
    let string = '';
    for (let i = 0; i < x; i++) {
        string += 'Meow ';
    }
    return string;
}
console.log(lunaNoises(5));
