function removeDuplicates(arr) {
    let temp = [];
    let j = 0;
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] !== arr[i + 1]) {
        temp.push(arr[i])
        j++;
      }
    }
    temp[j] = arr[arr.length - 1];
    return temp;
  }
  
  let a = [1, 2, 2, 3, 4, 5, 5, 5, 5];
  let result = removeDuplicates(a);
  console.log(result);
  