interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string; // can also add functions in interfaces. ---->  functionName(): return value type;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const drink2 = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink name is ${this.name}, Has sugar ${this.sugar}`;
  },
};

// const printVehicle = (vehicle :{name:string;year:number;broken:boolean}) : void => {
//     console.log(`Name: ${vehicle.name}`);
//   console.log(`Year of build: ${vehicle.year}`);
//   console.log(`condition: ${vehicle.broken}`);
// }

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year of build: ${vehicle.year}`);
  console.log(`condition: ${vehicle.broken}`);
};
printVehicle(oldCivic);

//////-------------------------------**********------------------------------

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink2);
