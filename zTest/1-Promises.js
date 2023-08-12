const myPromise = new Promise((resolve, reject) => {
  let randomNum = Math.floor(Math.random() * 10);

  if (randomNum > 5) {
    resolve(`Success! Its Greater ${randomNum}`);
  } else {
    reject(`Error Its Not ${randomNum}`);
  }
}, 1000);

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
