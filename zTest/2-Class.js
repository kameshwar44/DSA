let car = "Honda";

class Car {
  static numofWheels = 4;

  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  start() {
    console.log(`${this.model} started`);
  }
}


const myCar = new Car("Honda", 2023)

console.log(myCar.model);
console.log(Car.numofWheels);

myCar.start()













// const myPromise = new Promise((resolve,reject)=>{
//     let MyRandomNum = Math.floor(Math.random() * 10)

//     if(MyRandomNum > 5){
//         console.log(`Success! Its Greater ${MyRandomNum}  `);
//     }
//     else{
//         console.log(`Error Its not ${MyRandomNum}`);
//     }

// })

// myPromise.then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })
