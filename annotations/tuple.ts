const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const pepsi = ["brown", true, 40];
//It is a simple array where we can manupuate the data at indexs.
//So to make an array behave like tuple we add annotations in it

const fanta: [string, boolean, number] = ["orange", true, 80];
//will have a consistent ordering of element

//we can use type alias so we don't have to mention types of element ervery time we make a tuple

type Drink = [string, boolean, number];

const sprite: Drink = ["clear", true, 40];

const tea: Drink = ["brown", false, 0];
