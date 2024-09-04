// Adding two numbers

const num1 = 8;
const num2 = 15;
console.log(num1 + num2);

// Subtracting Numbers

const num3 = 30;
const num4 = 12;
console.log(num3 - num4);

// Multiplying Numbers

const num5 = 7;
const num6 = 3;
console.log(num5 * num6);

// Dividing Numbers

const num7 = 20;
const num8 = 4;
console.log(num7 / num8);

// Average of three Numbers

const num9 = 15;
const num10 = 25;
const num11 = 10;
console.log((num9 + num10 + num11) / 3);

// Modulo Operator

const x = 10;
console.log(x % 3);

/*
The modulo operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
*/

// Even or Odd

function checkOddEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is EVEN `);
  } else {
    console.log(`${num} is ODD `);
  }
}
checkOddEven(10);
checkOddEven(9);

// Divisibility Check

function checkNum(num) {
  if (num % 5 === 0 && num % 7 === 0) {
    console.log(`This number is divisable`);
  } else {
    console.log("This number is not divisable");
  }
}

checkNum(35);
checkNum(28);

// Counting by Steps

let i;
for (i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}

// Logical AND Operator

function checkNumber(num) {
  if (num > 10 && num < 20) {
    console.log(`The ${num} number satisfies the condition`);
  } else {
    console.log(`The ${num} does not satisfy the condition`);
  }
}

checkNumber(2);
checkNumber(19);

// Logical OR Operator

function checkNumberTwo(num) {
  if (num < -5 || num > 10) {
    console.log(`The ${num} number satisfies the condition`);
  } else {
    console.log(`The ${num} does not satisfy the condition`);
  }
}

checkNumberTwo(15);
checkNumberTwo(-3);

// Logical NOT Operator

function checkBoolean(para) {
  if (para != true) {
    console.log("true");
  } else {
    console.log("false");
  }
}
checkBoolean(false);
checkBoolean(true);

// Combining Logical Operators

function checkFinalNumber(num) {
  if ((num > 5 && num < 10) || (num > 20 && num < 30)) {
    console.log(`The number ${num} satisfies the condition`);
  } else {
    console.log(`The number ${num} does not satisfy the condition`);
  }
}

checkFinalNumber(8);
checkFinalNumber(14);
checkFinalNumber(3);
checkFinalNumber(25);
