//Soal 1. Melakukan Looping Menggunakn While
console.log('--No 1--')

var i=0
console.log('LOOPING PERTAMA')
while(i<20){
    i=i+2
    console.log(i+' - I love coding')
}

console.log('LOOPING KEDUA')
while(i>0){
    console.log(i+' - I will become fullstack developer')
    i=i-2   
}

//Soal 2. Melakukan Looping Menggunakan For
console.log('--No 2--')

var j
console.log('LOOPING PERTAMA')
for (j=1; j<21; j++){
    console.log(j+' - I love coding')
}

console.log('LOOPING KEDUA')
for (j=20; j>0; j--){
    console.log(j+' - I will become fullstack developer')
}

// Soal 3. Angka Genap dan Ganjil
console.log('--No 3--')

var k = 1
console.log('-ganjil dan genap-')
while(k<=100){
    if (Number.isInteger(k/2)){
        console.log('GENAP')
    }
    else {
        console.log('GANJIL')
    }
k++ 
} 

//Pertambahan counter 2 dan kelipatan 3
var l = 1
console.log('-pertambahan counter 2-')
while(l<=100){
    if (Number.isInteger(l/3)){
        console.log(l+' kelipatan 3')
    }
    else {
        console.log('')
    }
l = l+2
} 

//Pertambahan counter 5 dan kelipatan 6
var m = 1
console.log('-pertambahan counter 5-')
while(m<=100){
    if (Number.isInteger(m/6)){
        console.log(m+' kelipatan 6')
    }
    else {
        console.log('')
    }
m = m+5
}

//Pertambahan counter 9 dan kelipatan 10
var n = 1
console.log('-pertambahan counter 9-')
while(n<=100){
    if (Number.isInteger(n/10)){
        console.log(n+' kelipatan 10')
    }
    else {
        console.log('')
    }
n = n+9
}