console.log("1. Print all numbers between -10 and 19");

var num = -10;

while(num < 20) {
  console.log(num);
  num++;
}

console.log("2. Print all even numbers between 10 and 40");

num = 10;

while(num < 41) {
  console.log(num);
  num+=2;
}

console.log("3. Print all odd numbers between 300 and 333");

num = 301;

while(num < 334) {
  console.log(num);
  num+=2;
}

console.log("4. Print all numbers divisible by 5 and 3 between 5 and 50");

num = 5;

while(num < 51) {
  if(num % 5 === 0 && num % 3 === 0)  {
    console.log(num);
  }
  num++;
}
