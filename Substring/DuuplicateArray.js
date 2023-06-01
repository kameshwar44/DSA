function findDuplicate(arr) {
    arr.sort((a, b) => a - b);
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) {
         newArray.push(arr[i])
      }
    }
    return newArray
    
  }
  
  const arr = [1, 3, 4, 4, 2,3,4,4,6,456,45];
  console.log(findDuplicate(arr));
  