var tanggal = 31; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 6; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1955; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//validasi tahun
if (tahun<1900 || tahun>2200){
    console.log('ganti input tahun')
}

//validasi bulan
if (bulan<1 || bulan>12){
    console.log('ganti input bulan')
}

//validasi tanggal
if (tanggal<0 || tanggal >31){
    console.log('ganti input tanggal')
}


switch (bulan) {
    case 1:
        bulan = "Januari";
        break;
    case 2:
        bulan = "Februari";
        if (Number.isInteger(tahun/4)){
            if(tanggal>29){
                console.log('ganti input tanggal')
            }
        }
        else if (tanggal>28) {
            console.log('ganti input tanggal')
        }
        break;
    case 3:
        bulan = "Maret";
        break;
    case 4:
        bulan = "April";
        if (tanggal > 30){
            console.log('ganti input tanggal')
        }
        break;
    case 5:
        bulan = "Mei";
        break;
    case 6:
        bulan = "Juni";
        if (tanggal > 30){
            console.log('ganti input tanggal')
        }
        break;
    case 7:
        bulan = "Juli";
        break;
    case 8:
        bulan = "Agustus";
        break;
    case 9:
        day = "September";
        if (tanggal > 30){
            console.log('ganti input tanggal')
        }
        break;
    case 10:
        bulan = "Oktober";
        break;                 
    case 11:
        bulan = "November";
        if (tanggal > 31){
            console.log('ganti input tanggal')
        }
        break;  
    case 12:
        bulan = "Desember";
        break;
}
    
console.log(`${tanggal} ${bulan} ${tahun}`)