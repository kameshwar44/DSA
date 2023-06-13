

function rev(str){
    let newstr ="";
    for(let i=str.length;i>=0;i--){
        newstr +=str.charAt(i)
      
    }
    if(str == newstr ){
       return "yes"
    }
    else{
         return 'No'
    }
    }
    let str ="addsda"
    console.log(rev(str))
    
    