for(let i=1;i<=50;i++){
    let count = 0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            count = 1;
            
        }
    }
    if(count==0 && i>1)
        console.log(i);
    
}
