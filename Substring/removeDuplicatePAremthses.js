let s= "()[]{}]";

function removedup(s){


for(let i=0;i<s.length;i++){
  if(s[i]==='(' && s[i+1]===')'){
            let ss= s.substring(0,i)+s.substring(i+2)
            return removedup(ss)
        }
  if(s[i]==='[' && s[i+1]===']'){
            let ss= s.substring(0,i)+s.substring(i+2)
            return removedup(ss)
        }
  if(s[i]==='{' && s[i+1]==='}'){
            let ss= s.substring(0,i)+s.substring(i+2)
            return removedup(ss)
        }
    
}
return s

}

console.log(removedup(s))

