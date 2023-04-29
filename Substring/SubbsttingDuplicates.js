let s= "azxxzy"

function removeDuplicates(s) {
   for(let i=0;i<s.length;i++){
           if(s[i]==s[i+1]){
          let ss= s.substring(0,i)+s.substring(i+2)
            return removeDuplicates(ss)
        }
       
  }
  return s
}
 console.log(removeDuplicates(s))