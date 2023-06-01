function sort012s(arr){
    let l=0;
    let m = 0;
    let r= arr.length-1;
    
    while(m<=r){
        if(arr[m]==0){
            //swap
            [arr[l],arr[m]] = [arr[m],arr[l]]
            m++;
            l++
        }
        else if(arr[m]==1){
            m++
        }
        else if(arr[m]==2){
            [arr[r],arr[m]]=[arr[m],arr[r]];
            r--
        }
    }
    return arr
    
}
let arr = [2,0,0,1,0,1,0,2,0,1,2,0,1,2,1,0,2,1,0]
console.log(sort012s(arr))