const add = (a: number, b: number): number => {
  return a + b;
};

const sub = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number) {
  return a * b;
};

//Void and never

const looger = (a: string): void => {
  console.log(a);
};

//When a function never completes or return anything
const throwError = (a: string): never => {
  throw new Error(a);
};

//Destructuring annotations

const todayWeather = {
  date: new Date(),
  weather: "string",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todayWeather);

const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather2(todayWeather);
