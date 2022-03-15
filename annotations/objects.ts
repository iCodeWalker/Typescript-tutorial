const profile = {
  age: 20,
  name: "alex",
  coords: {
    lat: 0,
    long: 98,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { name, age }: { name: string; age: number } = profile;

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
