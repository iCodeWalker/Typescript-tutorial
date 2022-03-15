const cars = ["audi", "BMW", "Tata", "porche"];
//if putting values in array at time of array declaration no need of type annotation

const people: string[] = [];
//if initializing an empty array than type annotation is required
//if just declaring an array than type annotaion is required

const carMakers = [["Q8"], ["Sclass"], ["safari"], ["jj"]];
//2-D array

const peopleName: string[][] = [];

//IF NO CONTENT IN ARRAY THAN TYPE ANNOTATION IS REQUIRED

//Help with inference when extracting value :----

const newCar = cars[0];
//TS inference knows that the new variable is string as the array cars is of string.

const myCar = cars.pop();

//Prevents adding incompitable values :----

//Gives error.
//cars.push(7234);

//Gets help with built in functions like map,filter,reduce.. :---

cars.map((car: string): string => {
  return car.toUpperCase();
});

//Gives autocomplete on variable that we have access to inside function.

//Flexible types. Multi type array :---

const impDates = [new Date(), "vaibhav"];

const newDates: (Date | string)[] = [];

impDates.push("kadwey");
impDates.push(new Date());
//impDates.push(2000);  Gives error;
