console.log('app.js reporting for duty..');

const typeOfNum = (inputNum) => {
    if (inputNum < 10) {
        console.log(inputNum, 'is a small number.')
    } else if (inputNum < 50) {
        console.log(inputNum, 'is a medium-sized number.')
    } else if (inputNum < 100) {
        console.log(inputNum, 'is a large number.')
    } else if (inputNum > 100) {
        celebrateBigNum(inputNum);
    }
}

const celebrateBigNum = (inputNum) => console.log(inputNum, 'IS A GIANT NUMBER!');

// typeOfNum(7);
// typeOfNum(12);
// typeOfNum(77);
// typeOfNum(101);

const checkANum = (inputNum) => {
    switch (true) {
        case (inputNum < 10):
            console.log(inputNum, 'is a small number!');
            break;
        case (inputNum < 50):
            console.log(inputNum, 'is a medium-sized number!');
            break;
        case (inputNum < 100):
            console.log(inputNum, 'is a large number!')
            break;
        case (inputNum > 100):
            celebrateBigNum(inputNum);
            break;
        default:
            console.log('Unknown number type!');
            break;
    }
}

// checkANum(7);
// checkANum(12);
// checkANum(75);
// checkANum(300);

// SECTION - Looping A Triangle

// let toPrintVal = '#';
// for (let i = 0; i < 7; i++) {
//     console.log(toPrintVal);
//     toPrintVal += '#';
// }


// SECTION - FizzBuzz

const fizzbuzz = () => {
    for (let i = 1; i < 101; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0)  {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
};

// NOTE - Version I found on stack overflow. Helpful for understanding how any returned value of zero (0) will evaluate to falsy (either 'fizz' or 'buzz'). Unclear if there's any benefit to not including an afterthought in the for loop and instead incrementing the i variable in the console.log statement:

// const shortModern = (n) => {
//     for (let i = 0; i < n; ) {
//         console.log(
//             (++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i            
//         );
//     }
// }


// NOTE - In comparison, this for loop includes an afterthought to use a postfix operator to increment the i variable. Notice that because it's the postfix operator (vs. the prefix operator above), this for loop initializes the variable i = 1 instead of i = 0 if we want the console.log statement to start printing at 1 instead of 0:
const fizzbuzzIncAfterthought = (n) => {
    for (let i = 1; i < n; i++) {
        console.log((i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);
    }
}


// SECTION - Chessboard

// NOTE - In reality, you almost always want to avoid a loop within a loop (alarm bells should go off). Include TS for number declaration, and have parameter be called 'size':

const createChessBoard = (size: number) => {
    let string = '';
    for (let i = 0; i < size; i++) {
        for (let b = 0; b < size; b++) {
            if ((i + b) % 2 === 0) string += " ";
            else string+= "#";
        }
        string += '\n';
    }
    console.log(string);
}

createChessBoard(6);


// const createChess = (x) => {
//     let size = x;
//     let string = '';
//     for (let i = 0 ; i < x; i++) {
//         for (let b = 0; b < x; b++) {
//             if ((i + b) % 2 === 0) {
//                 string += " ";
//             } else {
//                 string += "#"
//             }
//         }
//         string += `\n`;
//     }
//     console.log(string);
// }
