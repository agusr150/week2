/*
------------
LOST NUMBERS
------------
PROBLEM
=======
	lostNumbers adalah sebuah function yang akan menerima tiga parameter.
	Tiga parameter tersebut adalah tiga angka yang berbeda.
	Function akan mengembalikan setiap angka diantara angka pada tiga parameter tersebut, dari nilai parameter terkecil ke parameter terbesar
	kecuali angka yang di input pada parameter
Contoh:
	first = 6, second = 1, third = 3
	terbesar adalah 6, terkecil adalah 1,
	maka function mengembalikan urutan angka secara berurutan seperti:
	2, 4, 5

Jika tidak ada angka yang ditampilkan, maka output "Tidak ada angka sama sekali".

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
*/

//Pseudocode
/**
 * READ variabel input parameter angka first, second, third 
 * 	//mengurutkan angka sbb: angka terkecil (angka1), angka tengah (angka2), dan angka terbesar (angka3)	
 * 		IF angka first <= angka second dan angka third, maka angka1 =  angka first
 * 			IF angka second <= angka third, maka angka2 = angka second dan angka3 = angka third
 * 			ELSE , maka angka2 = angka third dan angka 3 = angka second
 * 		ELSE IF angka second <= angka first dan angka third, maka angka1 = angka second
 * 			IF angka first <= angka third, maka angka2 = angka first dan angka3 = angka third
 * 			ELSE, maka angka2 = angka third dan angka3 = angka first
 * 		ELSE maka angka1 = angka third
 * 			IF angka first <= angka second, maka angka2 = angka first dan angka3 = angka second
 * 			ELSE, maka angka2 = angka second dan angka3 = angka first
 * 
 * //mencari lost numbers
 * a = angka1+1
 * b = angka2+1
 * c = angka3+1
 * IF a>=angka2, maka lost number pertama tidak ada
 * ELSE , lakukan loop 
 * 		LOOP untuk nilai a dari angka1 sampai angka2 dengan penambahan 1, didapat lost numbers pertama
 * IF b>= angka3, maka lost number kedua tidak ada
 * ELSE, lakukan loop
 * 		LOOP untuk nilai b dari angka2 sampai angka3 dengan penambahan 1, didapat lost numbers kedua
 * 
 * //mencetak hasil
 * IF tidak ada lost number, WRITE 'tidak ada angka sama sekali
 * ELSE WRITE angka-angka di lost numbers pertama dan kedua
 * 
 */

function lostNumbers(first, second, third) {
// mengurutkan angka
	if ((first<=second)&&(first<=third)){
		angka1 = first
		if (second<=third){
			angka2 = second
			angka3 = third
		}
		else{
			angka2 = third
			angka3 = second
		}
	}
	else if((second<=first)&&(second<=third)){
		angka1 = second
		if (first<=third){
			angka2 = first
			angka3 = third
		}
		else{
			angka2 = third
			angka3 = first
		}
	}
	else{
		angka1 = third
		if (first<=second){
			angka2 = first
			angka3 = second
		}
		else {
			angka2 = second
			angka3 = first
		}
	}

//mencari lost numbers
a = angka1
b = angka2

a1=a+1

if (a1 >= angka2){
    lost1 = ''
} 
else{
    lost1 = a1
    a=a1+1
    while (a<angka2){
        lost1 = lost1+' ,'+a
        a++
    }
}

b1=b+1

if (b1 >= angka3){
    lost2 = ''
} 
else{
    lost2 = b1
    b=b1+1
    while (b<angka3){
        lost2 = lost2+' ,'+b
        b++
    }
}

if ((lost1=='')&&(lost2=='')){
    return 'Tidak ada angka sama sekali'
}
else if(lost1==''){
    return lost2
}
else if(lost2==''){
    return lost1
}
else{
	lost= lost1 + ', '+lost2
	return lost
}

}

console.log(lostNumbers(1, 3, 5));
// // 2, 4

console.log(lostNumbers(4, 6, 2));
// // 3, 5

console.log(lostNumbers(100, 108, 105));
// // 101, 102, 103, 104, 106, 107

console.log(lostNumbers(6, 5, 3));
// // 4

console.log(lostNumbers(3, 1, 2));
// Tidak ada angka sama sekali

console.log(lostNumbers(1, 1, 1));
// Tidak ada angka sama sekali
