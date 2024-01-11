'use strict';

//1.
//let step = 0.5;
//let numbersString = '';
//for (let i = 20; i <= 30; i += step) {
//    numbersString += i + ' ';
//}
//console.log(numbersString)

//2.
//const rate = 27;
//for (let dollar = 10; dollar <= 100; dollar +=10) {
//    let grivna = rate * dollar;
//    console.log(`${dollar} доларів = ${grivna} гривень`)
//}

//3.
//let N = prompt ('Введить ціле число');
//N = parseInt(N);
//if (Number.isInteger(N) && N > 0) {
//    for (let i = 1; i <= 100; i++) {
//        let square = i * i;
//        if (square <= N) {
//            console.log(`Число: ${i}, Квадрат: ${square}`);
//        }
//    }
//}

//4.
//let inputNumber = prompt("Введіть ціле число:");
//let number = parseInt(inputNumber);
//if (Number.isInteger(number) && number > 1) {
//    let isPrime = true;
//    for (let i = 2; i <= Math.sqrt(number); i++) {
//        if (number % i === 0) {
//            isPrime = false;
//            break;
//        }
//    }
//    if (isPrime) {
//        console.log(`${number} є простим числом.`);
//    } else {
//        console.log(`${number} не є простим числом.`);
//    }
//} else {
//    console.log("Введено некоректне число. Будь ласка, введіть ціле число більше за 1.");
//}

//5.
// let inputNumber = prompt("Введіть ціле число:");
// let number = parseInt(inputNumber);
// if (Number.isInteger(number) && number > 1) {
//     let isPowerOf3 = false;
//     for (let i = 0; Math.pow(3, i) <= number; i++) {
//         if (Math.pow(3, i) === number) {
//             isPowerOf3 = true;
//             break;
//         }
//     }
//     if (isPowerOf3) {
//         console.log(`${number} можна отримати шляхом зведення числа 3 до деякої ступені.`);
//     } else {
//         console.log(`${number} не можна отримати шляхом зведення числа 3 до деякої ступені.`);
//     }
// } else {
//     console.log("Введено некоректне число. Будь ласка, введіть ціле число більше за 1.");
// }


let inputNumber = prompt("Введіть ціле число:");
let number = parseInt(inputNumber);
if (Number.isInteger(number) && number > 1) {
    let isPrime = true;
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} є простим числом.`);
    } else {
        console.log(`${number} не є простим числом.`);
    }
} else {
    console.log("Введено некоректне число. Будь ласка, введіть ціле число більше за 1.");
}