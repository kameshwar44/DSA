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
  
  const arr = [1, 3, 4, 4,3,4,5,6,75,5,5,5];
  console.log(findDuplicate(arr));
  