// class employees{
//     constructor(names){
//         console.log("Hi Good Morning " + names);
//     }
// }
// class Managers extends employees{

// }

// let a = new Managers("KAmesh")

// ============================================

class employee {
  constructor(names) {
    console.log("Hi Good Morning " + names);
  }
}

class Manager extends employee {
  constructor(names) {
    super();
    console.log("HEllo Good  " + names);
  }
}

let b = new Manager("KAmesh");
