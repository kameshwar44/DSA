let arr = "anagram";
let arr2 = "nagaram"
let sp = arr.split("").sort().join('')
let as = arr2.split("").sort().join('')
if(sp===as){
    console.log(true)
}else{
    console.log(false)

}