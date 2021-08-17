var a = "I am a variable",
  b,
  brk = "<br/>";
document.writeln(a + brk);

(a = new Number(10)), (b = 20);
document.writeln("Sum of two variables: ", a + b + brk);

if (a == 10) {
  document.writeln("Value of a is 10");
} else {
  document.write("Value of a is NOT 10");
}

document.write(brk);

switch (b) {
  case 1:
    document.write("b = 1");
    break;
  case 20:
    document.write("b = 20");
    break;
  default:
}

document.write(brk);

function printp() {
  document.write("Hi ");
}

var i = 5;
while (i > 0) {
  printp();
  i--;
}

document.write(brk);

var arr = [10, 21, 33, 42, 50];

for (let i = 0; i < arr.length; i++) {
  document.write("Value at ", i, " is ", arr[i]);
  document.write(brk);
}

document.write(brk);

for (let i of arr) {
  if (i % 2 === 0) {
    document.write("Value is even : ", i);
    document.write(brk);
  }
}

document.write(brk);

function say() {
  console.log("I have been clicked");
}

document.write("Today is ", new Date().toLocaleDateString());

var obj = { id: 1, name: "amal" };

document.write(brk);

document.write("Object Name: ", obj.name, " id: ", obj.id);

//1
var curdate = new Date();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is : ", days[curdate.getDay()]);
console.log(
  "Current time is : ",
  curdate.getHours(),
  curdate.getHours() < 12 ? "AM " : "PM ",
  curdate.getMinutes(),
  " : ",
  curdate.getMilliseconds()
);

//2
function printcontent() {
  window.print();
}

//3
console.log(new Date().toLocaleDateString());

//4
var la = 5,
  lb = 6,
  lc = 7;

var p = la + lb + lc,
  area = Math.sqrt(p * (p - la) * (p - lb) * (p - lc));
console.log("Area of a triangle is : ", area);

//5
function rotate(s) {
  let len = s.length;
  let en = s.substring(len - 1);
  let st = s.substring(0, len - 1);
  return en + st;
}

console.log(rotate("amal"));

//6
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }

  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }

  return false;
}

console.log(isLeapYear(2009) ? "Leap year" : "Not a leap year");

//7
function countSundays() {
  let count = 0;

  for (year = 2014; year <= 2050; year++) {
    let dt = new Date("01/01/" + year);
    if (dt.getDay() === 0) {
      count++;
    }
  }

  console.log("There are ", count, " Sundays.");
}

countSundays();

//10
function muldiv() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  console.log("mul: ", num1 * num2);
  console.log("div: ", num1 / num2);
}

//12
console.log("The current url is ", window.location.href);

//16
function sumtrip() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  let sum = num1 + num2;
  if (num1 === num2) {
    console.log("Numbers are same.");
    sum = sum * 3;
  }

  console.log("The result is: ", sum);
}
