const apple: number = 5;

let apples: number = 6;
apples = 10;
//apples = "six apples";  Gives error, can't assign string or any other type otherthan number

let speed: string = "fast";

let hasName: boolean = true;

let nothing: null = null;

//built in-objects

let now: Date = new Date();

//Array

let colors: string[] = ["red", "green", "blue"];

let myNumers: number[] = [1, 2, 3];

let myTruths: boolean[] = [true, true, false];

// Class

class Car {}
let innova: Car = new Car();

//Object literals

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations
// 1) Function that returns the 'any' type

const json = '{"x":10,"y":20}';

const coordinates = JSON.parse(json);
console.log(coordinates);

//Variable declaration on one line and initialization on other

let words = ["red", "green", "blue"];
let foundWord = false;

words.map((color) => {
  if (color === "green") {
    foundWord = true;
  }
});

//Variable whose type cannot be inferred correctly

let numbers = [-1, 4, 50, -4];

let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
