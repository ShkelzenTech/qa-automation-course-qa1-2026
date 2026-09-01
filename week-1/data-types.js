//"Hello World" -> String
// 42    -> Number
// True  -> Boolean
// Null  -> Null
// Undefined -> Undefined
// [1, 2, 3] -> Array
// { name: "Alex", age: 20 }    -> Object

let myFavMovie = "Bohemian Rhapsody";

const myAge = 31;

let doILikeJs = true;

let lightOn;

let javaScript = null;

// let a = "JS";               -> Primitive
// let b = [10,20];            -> Non-Primitive
// let c = 100;                -> Primitive
// let d = { city:"Paris" };   -> Non-Primitive

let cars = ["toyota", "Lexus", "Honda", "Chevrolet", "Audi"];
console.log(cars);

const rainbowColors = ["Red", "Orange", "Blue", "Yellow", "Green"];
console.log(rainbowColors);

let currentTopPlayers = ["Rodri", "Yamal", "Lautaro", "Haaland", "Mbappe"];
console.log(currentTopPlayers);

const game = {
  name: "Resident Evil 4",
  genre: ["Survival Horror", "Action", "Puzzle", "Adventure"],
  yearProduced: 2004,
  mainCharacter: "Leon S. Kennedy",
  developer: "Capcom Production Studio 4",
  publisher: "Capcom",
  designers: ["Hiroshi Shibata", "Kouji Kakae", "Shigenori Nishikawa"],
};
console.log(game);

const movie = {
  name: "Bohemian Rhapsody",
  genre: ["Biographical", "Drama", "History", "Musical"],
  yearProduced: 2018,
  mainCharacter: "Freddie Mercury",
  producers: ["Graham King", "Jim Beach"],
};
console.log(movie);

const person = {
  name: "Lionel Messi",
  age: 39,
  currentTeam: "Inter Miami",
  previousTeamsPlayed: ["Barcelona", "PSG"],
  Sponsors: ["Adidas", "PepsiCo", "Apple", "Budweiser"],
};
console.log(person);

let number = 25;
if (number > 14) {
  console.log("Positive number");
}

let likesBurgers = true;

if (likesBurgers) {
  console.log("I love Burgers . Time to eat!");
} else {
  console.log("I hate Burgers.");
}

let score = 81;

if (score >= 90) {
  console.log("Grade A");
} else if (score > 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

let car = "Toyota";

switch (car) {
  case "Toyota":
    console.log("You chose a Toyota.");
    break;

  case "BMW":
    console.log("You chose a BMW.");
    break;

  case "Ford":
    console.log("You chose a Ford.");
    break;

  default:
    console.log("Car not found.");
}

let thisWeek = "rain";

switch (thisWeek) {
  case "sunny":
    console.log("it will be sunny");
    break;
  case "cloudy":
    console.log("it will be cloudy");
    break;
  case "snow":
    console.log("it will snow");
    break;
  case "rain":
    console.log("it will rain");
    break;
  default:
    console.log("we don't know the weather");
}
