class Vehicle {
  //   public drive(): void {
  //     console.log("wroo wroom");
  //   }

  protected drive(): void {
    console.log("vrrommmm");
  }

  //   public honk(): void {
  //     console.log("beep beep");
  //   }
}

//Creating an instance of class

const vehicle = new Vehicle();
// vehicle.drive();  ---------> Drive() is protected and cannot be accessed outside of class.
// vehicle.honk();

//--------------------- Basic inheritance---
//relationship between vehicle and car

//extends Vehicle key word tells TS that we want all the methods and fields of Vehicle class in Car Class
class Car2 extends Vehicle {
  private honk() {
    console.log("beep ");
  }

  startHonkingProcess(): void {
    this.honk();
    this.drive();
  }
}
const toyota = new Car2();
// toyota.drive();

/// --------------------------------------**************   Fields

class Vehicle2 {
  //color: string = "color";    // This is First way declaration of variable or property.

  //color: string;              Second way of declaration of variable
  // constructor(color:string){
  //     this.color = color;
  // }

  constructor(public color: string) {} //Third way of declaration;
  // modifiers can be public, private or protected.
}

const corrola = new Vehicle2("grey");
console.log(corrola.color);

///////////// ------------> Constructor function is instantly executed when we create a new instance of class.

//Fields with inheritance

//Super is reference to the constructor function of the parent class.
//So when we call a constructor function in child class we have to call constructor method of parent class also.

class Vehicle3 {
  constructor(public color: string) {}
}

class Car3 extends Vehicle3 {
  constructor(public wheels: number, color: string) {
    super(color);
  }
}

const tata = new Car3(4, "blue");
console.log(tata.wheels);
console.log(tata.color);
