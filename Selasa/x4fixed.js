//tanggal sama tahunnya masih belum di handle ya

//fixed tanggal dan tahun .. tanggal udah di atur dengan option perbulan ..semoga sesuai yang di harapkan kak 


var tanggal=30;
var bulan=2;
var tahun=2019;

if(tanggal<1 || tanggal >31){
    console.log('Maaf tanggal yang di input tidak ada!');
}else if(bulan<1 || bulan > 12){
    console.log('Maaf bulan yang di input tidak ada!!');
}else if(tahun<1500 || tahun>2500){
    console.log('Maaf tahun yang diinput tidak ada didalam system!');
}else if(tanggal>29 && bulan ===2){
    console.log('Maaf untuk Bulan Febuari tanggal yang di input tidak ada');
}else if(tanggal>=31 && bulan ===4 || bulan===6 || bulan === 9 || bulan === 11){
    console.log('Maaf untuk tanggal yang di input melebihi tanggal pada bulan '+bulan+'!');
}else{
    switch(bulan){
        case 1: {bulan='Januari';break;}
        case 2: {bulan='Ferbuari';break;}
        case 3: {bulan='Maret';break;}
        case 4: {bulan='April';break;}
        case 5: {bulan='Mei';break;}
        case 6: {bulan='Juni';break;}
        case 7: {bulan='July';break;}
        case 8: {bulan='Agustus';break;}
        case 9: {bulan='September';break;}
        case 10: {bulan='Oktober';break;}
        case 11: {bulan='November';break;}
        case 12: {bulan='Desember';break;}
    }
    console.log(tanggal,bulan,tahun);
}