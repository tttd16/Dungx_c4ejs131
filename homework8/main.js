//Bài 1
/*
const operator = prompt('Enter operator ( either +, -, * or / ): ');
let a =parseInt(prompt());
let b =parseInt(prompt());
let result;

// Cách 1
// if (`${operator}` == `+`) {
//     console.log(result = a + b)
// } else if (`${operator}` == `-`) {
//     console.log(result = a - b)
// } else if (`${operator}` == `*`) {
//     console.log(result = a * b)
// } else if (`${operator}` == `/`) {
//     console.log(result = a / b)
// } 

// Cash 2
switch (operator) {
    case `+` : 
        console.log(result = a + b);
        break;
    
    case `-` : 
        console.log(result = a - b);
        break;
    
    case `*` : 
        console.log(result = a * b);
        break;
    
    case `/`  : 
        console.log(result = a / b);
        break;
    
    default: 
        console.log('Không biết')
}

console.log(`${a} ${operator} ${b} = ${result}`);

*/


// BÀI 2

/*
const number = parseInt(prompt("Nhập số: "));
let isPrime = true;

if (number < 1) {
    isPrime = false;
} else if (number == 1) {
    isPrime = false;
} else {
    if ( number == 2) {
        isPrime = true;
    } else if (number > 2) {
        for(let i = 3; i < number - 1; i+=2) {
            if ( number % i == 0) {
                isPrime = false
            }
        }
    }
}

if(isPrime == true) {
    console.log('Là số nguyên tố: ', number);
} else {
    console.log('Không là số nguyên tố:', number)
}

*/
