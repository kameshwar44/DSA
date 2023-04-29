
function sort012(arr,N){
    let czero= 0;
    let cone =0;
    let ctwo =0;
    
    for(let i=0;i<N;i++){
        if(arr[i]==0){
            czero++;
        }
        else if(arr[i]==1){
            cone++;
        }
        else{
            ctwo++;
        }
    }
    let j=0;
    for(let i=0;i<czero;i++){
        arr[j]=0;
        j++
    }
    for(let i=0;i<cone;i++){
        arr[j]=1;
        j++
    }
      for(let i=0;i<ctwo;i++){
        arr[j]=2;
        j++
    }
    return arr
}
let arr = [2,0,0,1,0,1,0,2,0,1,2,0,1,2,1,0,2,1,0]
let N = arr.length;
sort012(arr,N)
console.log(arr)

