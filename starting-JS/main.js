//console.log to print
console.log("Hello World"); //English
console.log("Hola Mundo"); //Spanish

//const data type for fixed variables
const username = "juaninicolai";
//let data type for flexible variables
let password = "Talleres2016";
password = "Constanza1.";

//No datatype is required in the variable signature
//typeof built in method to check the datatype - returns a String
const isUserLoggedIn = true;
const username1 = "bytbytdyt";
const age = 10;

//undefined: variables that has not been initialized
//null: empty variables = objects
const username2 = undefined;
const username3 = null;

//== operator to compare values
console.log(1 == 1);
console.log(1 == "1");
//=== (3) operator to compare values and data types
console.log(1 === 1);
console.log(1 === "1");

//Array as ArrayList
const usernames = ["coti", "juani", "omar"];
usernames.push("marianna"); //adds element at the end
usernames[0] = "sara"; //adds element at given index 0
usernames.pop(); //removes the last element
usernames.unshift("coti"); //add element at index 0
usernames.shift(); //removes the first element in the array

//HashMap is flexible
const usernameAges = {
  cotiRicciardi: 26,
  juaninicolai: 26,
};
usernameAges["omargallardo"] = 31;
//set a new valuable inside the hashmap
usernameAges["omargallardo"] = 29;
//getting a value: console.log(usernameAges["juaninicolai"]);

const usernameAgesMixedTypes = {
  peteTheBeat: "23",
  mariannner: "29",
  typppi: [1, 2, 3],
};

//String
let greeting = "Hola hermanito";
greeting = "Hello bro";
greeting = "Bonjour mon bro";

//String - Exercise 1
const firstname = "Juan Ignacio";
const lastname = "Nicolai";
const finalname = firstname + " " + lastname;

//Numbers - Exercise 2
const numberOfTeachers = 10;
const numberOfStudents = 25;
const total = numberOfStudents + numberOfTeachers;

const percentage1 = (numberOfTeachers * 100) / total;
percentage1.toFixed(2)
const percentage2 = (numberOfStudents * 100) / total;
percentage2.toFixed(2)

//Arrays - Exercise 3
const fruits = ["banana", "apple", "strawberry", "kiwi", "fig", "orange"];

//Arrays - Exercise 4
const names1 = ["juan", "pawel", "omar", "andre"];
const lastElement = names1[names1.length - 1];

//Typeof - Exercise 5
typeof 3; //number
typeof -33; //number
typeof "3"; //string
const threeConst = 3;
console.log(threeConst); //3
let threeLet = 3;
console.log(threeLet); //3
typeof 'console.log("console.log(console.log(""))")' //string
typeof typeof 45; //string
const names = ["benjamin", "Christopher"];
typeof names[0]; //string
typeof [3][0]; //number
typeof true; //boolean

//Typeof Exercise 6
const value = 24 * 55;
const myName = "Juan Ignacio Nicolai";
const firstCharacter = myName[0];
const array = ["juan", "coti", "snorri", 1, 2, 3, true, true, false];

//Typeof - Exercise 7
let name2 = "benjamin";
name2 = "benjamin-better";

let pizzaPrice = 78;
const pizzaPriceDiscounted = pizzaPrice - 10;

const users = ["peter", "Johnny", "Børge"];
const lastUser = users[2];

//Operators - Exercise 1
let num = 10;
const one = num > 5 && num < 15;
one //true
const two = num < 10 || num === 10;
two; //true
const three = false || true;
three; //? true
const four = !true;
four; //false
let greaterThan5 = num > 5;
greaterThan5; //true
!greaterThan5; //false
!(num === 10); //false

//Objects - Exercise 1
const juan = {
  name: "juan",
  age: 27,
  nationality: "Argentina",
};

//Objects - Exercise 2
let kitten = {
  "fur colour": "orange",
  age: "23",
};
let laptop = {
  brand: "Lenovo",
  ram: "5GB",
};
let phone = {
  "operating system": "iOS",
  hasStylus: true,
  megapixels: 12,
  batteryLife: "24 hours",
};

//Objects - Exercise 3
//Console.log the values of each property of "kitten"

let kitten1 = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown",
};

kitten1.ageMonths
kitten1.isFemale
kitten1.furColour

//Object - Exercise 4
let dog = {
  name: "Billy",
  wantsToPlay: false,
};

// WRITE CODE BELOW THIS LINE
dog.name = "Rex";
dog.wantsToPlay = true;
// WRITE CODE ABOVE THIS LINE

dog.name
dog.wantsToPlay

// -> it should output:
// Rex
// true

//Conditionals - Exercise 1

function snorri(num1) {
  if (num1 > 20) {
    return `${num1} is greater than 20`;
  } else if (num1 === 20) {
    return `${num1} is equal to 20`;
  } else if (num1 < 20) {
    return `${num1} is less than 20`;
  } else {
    return `${num1} isn't even a number :(`;
  }
}

//Conditionals - Exercise 2
function myMood(mood){
  if (mood === "Happy"){
    return "Good job, you're doing great!";
  } else if (mood === "Sad"){
    return "Every cloud has a silver lining";
  } else if (typeof mood == typeof 0){
    return "Beep beep boop"
  } else return "I'm sorry, I'm still learning about feelings!"
}
myMood("Happy")
myMood("Sad")
myMood(2)
myMood()

//Loops - Exercise 1
let output = "0";
function loops(n) {
  for(let i = 1; i <= n; i++){
    output += '+' + i; 
  }
  return output;
}

//Functions - Exercise 1
function formatPenceToPounds(money){
  return "€"+(money * 0.84)
}

//Functions - Exercise 2
function increaseByHalf(money){
  return money + (money / 2);
}

let pocketMoney = 413;
function both(){
  let money1 = increaseByHalf(pocketMoney)
  return formatPenceToPounds(money1)
}

function printMessage(x) {
  console.log("Hello, nice to meet you " + x);
}

function getMessage(name) {
    return "Hello, nice to meet you " + name;
  }
const messageForAli = getMessage("Ali");
const curiousMessage = getMessage(42);




