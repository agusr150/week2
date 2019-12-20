
function konversiMenit(menit) {
    // you can only write your code here!
    waktu = Math.floor(menit/60)
    detik = menit - waktu*60

    str1 = waktu.toString()
      if (detik<10){
        str3 = '0'+detik
      }
      else{str3 = detik}
    
   return str1 + ':' + str3
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00