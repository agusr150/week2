function xo(str) {
  // you can only write your code here!
l = str.length
let x = 0
let o = 0
    while (l>0){
        poin = str[l-1]
        if (poin==='x'){
            x++
        }
        else if (poin==='o'){
            o++
        }
        else{}
    l--
    }
if(x!=o){
    return false
}
else{
    return true
}

}


// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true