console.log("Print all numbers between -10 and 19");

for(var i = -10; i < 20; i++) {
  console.log(i);
}

console.log("Print all even numbers between 10 and 40");

for(i = 10; i < 41; i++) {
  if(i % 2 === 0) {
    console.log(i);
  }
}

console.log("Print all odd numbers between 300 and 333");

for(i = 300; i < 334; i++) {
  if(i % 2 !== 0) {
  console.log(i);
  }
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");

for(i = 5; i < 51; i++) {
  if(i % 3 === 0 && i % 5 === 0)  {
    console.log(i);
  }
}
