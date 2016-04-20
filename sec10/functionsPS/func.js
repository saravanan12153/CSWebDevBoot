console.log("Write a function isEven() which takes a single numeric agrument and returns true if the number is even, and false otherwise.");

function isEven(num)  {
  return num % 2 === 0;
}

console.log("Write a function factorial() which takes a single numeric argument and returns the factorial of that number");

function factorial(num)  {
  var result = 1;
  for(num2 = result + 1; num2 <= num; num2++) {
    result = result * num2;
  }
  return result;

  // if(num === 0 || num === 1)  {
  //   return 1;
  // } else {
  //   for(num2 = num - 1; num2 > 1; num2--) {
  //     num = num * num2;
  //   }
  //   return num;
  //   }
}



console.log("Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version.");

function kebabToSnake(str)  {
  str2 = str.replace(/-/g, "_");

  // while(str.indexOf("-") !== -1) {
  //   str = str.replace("-", "_");
  // }
  return str2;
}
