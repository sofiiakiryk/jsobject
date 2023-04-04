let students = [
  { name: "A", age: "12", marks: ["10", "11", "10"] },
  { name: "M", age: "15", marks: ["9", "11", "10"] },
  { name: "K", age: "13", marks: ["8", "11", "10"] },
  { name: "S", age: "17", marks: ["11", "11", "10"] },
];
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
for (var i = 0; i < students.length; i++) {
  students[i].test = "True";
}
var newPerson = { name: "Alice", age: 20 };
students.push(newPerson);
console.log(students);

let information = { name: "Sofiia ", age: "11" };
information.address = {
  country: "Ukraine",
  city: "Kyiv",
};
//homework
const numbers = [12, 18, 6, 20, 30, 15, 21];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 17) {
    console.log(numbers[i]);
  }
}
const person = {
  name: "John",
  age: 25,
  grades: [80, 90, 75, 85, 95],
};

let sum = 0;
for (let i = 0; i < person.grades.length; i++) {
  sum += person.grades[i];
}

console.log("Sum of grades:", sum);
console.log("First grade:", person.grades[0]);
console.log("Last grade:", person.grades[person.grades.length - 1]);
//classwork
let games = [
  {
    name: "Farcry",
    price: 60,
  },
  {
    name: "Minecraft",
    price: 40,
  },
  {
    name: "GTA 5",
    price: 70,
  },
  {
    name: "RDR",
    price: 40,
  },
  {
    name: "CS:GO",
    price: 15,
  },
  {
    name: "CS",
    price: 100,
  },
];
if (games.price > 40) {
  console.log(games.price);
}
games
  .filter((games) => games.price > 40)
  .forEach((games) => {
    console.log(games.name);
  });
for (let i = 0; i < games.length; i++) {
  if (games[i].price > 40) {
    console.log(games[i].price);
  }
}
for (let i = 0; i < games.length; i++) {
  console.log(games[i].name);
}
let summ = 0;
for (let i = 0; i < games.price.length; i++) {
  summ += games.price[i];
}
console.log(summ);
//2
function numbers(number) {
  for (let i = 0; i < 2; i++) {
    console.log(number);
  }
}
number(12);
number(4);
//
function res(n1, n2) {
  console.log(n1 + n2);
}
res(1, 2);
//
const car = {
  make: "Honda",
  model: "Civic",
  year: 2022,
  color: "black",
  drive: function () {
    console.log("The car is now being driven");
  },
  stop: function () {
    console.log("The car has been stopped");
  },
};
const student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  studentId: "S12345",
  courses: ["Math", "English", "History"],
  enrollCourse: function (course) {
    this.courses.push(course);
    console.log(`Enrolled in ${course} course`);
  },
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
