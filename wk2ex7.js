// Soal 1. Menyusun Barisan Bintang
console.log('--No1--')

var rows1 = 5;// please input number of row
while (rows1>0){
    console.log('*')
    rows1--
}


// Soal 2. Menyusun Barisan Bintang dengan Nested Looping
console.log('--No2--')

/*
var rows2 = 5; // please input number of row 
r =rows2
while (rows2>0){
    console.log('*'.repeat(r))
rows2--
}
*/

var rows2 = 5
var str1 = '*'
var str =''
var a = 1
while (rows2>0){
    while(a<=rows2){
    str = str.concat(str1)
    a++
    }
console.log(str)
rows2--  
}


// Soal 3. Menyusun Barisan Tangga Bintang dengan Nested Looping
console.log('--No3--')

/*
var rows3 = 5; // please input number of row
while (rows3>0){
    console.log('*'.repeat(rows3))
rows3--
}
*/

var rows3 = 5;  // please input number of row
var xtr = ''
var xtr1 = '*'
var b = 1
var c = rows3
while (rows3>0){
    while (b<=rows3){
    xtr = xtr.concat(xtr1)
    b++
    }
c--
ytr = xtr.slice(c)
console.log(ytr)
rows3--
}