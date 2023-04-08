function subarraySum(arr, n, s){
    let start = 0, end = 0, sum = arr[0];
    while (start < n && end < n) {
        console.log(`start: ${start}, end: ${end}, sum: ${sum}`); // log current values of start, end, and sum
        if (sum === s) {
            console.log(`Subarray found between indices ${start + 1} and ${end + 1}`); // log the subarray indices
            return [start + 1, end + 1]; // add 1 to convert to 1-based indexing
        } else if (sum < s) {
            end++;
            sum += arr[end];
        } else {
            sum -= arr[start];
            start++;
        }
    }
    console.log("Subarray not found");
    return [-1]; // subarray not found
}

let arr = [1,2,3,7,5];
let n = arr.length;
let s = 33;
console.log(subarraySum(arr, n, s)); // should log "Subarray found between indices 2 and 4" and [2, 4]
