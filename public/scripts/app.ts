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

let toPrintVal = '#';
for (let i = 0; i < 7; i++) {
    console.log(toPrintVal);
    toPrintVal += '#';
}