//yang ganjil genap masih belum sesuai. harusnya outputnya antara ganjil dan genap bukan number .serta yang kelipatan masih belum sesuai dengan yang diharapkan

// semoga sesuai ya kak


// 1. melakukan Looping Mengginakan While

var angka =2;
while(angka<=20){
    console.log(angka + ' - I love coding');
    angka+=2;
}

var angka1 =20;
while(angka1>=2){
    console.log(angka1+' - I Will become fullstack developer');
    angka1-=2;
}

// 2. Melakukan Looping Menggunakan for

for( var angko=1;angko <=20 ; angko++){
    console.log(angko+' - I love coding');
}

for( var angko1=20;angko1 >= 1 ; angko1--){
    console.log(angko1+' - I Will becoome fullstack developer');
}


// 3.Angka Ganjil Genap

// ganjil dan genap
for(var anggkaa=1;anggkaa<=100;anggkaa++){
    if(anggkaa %2==0){
        console.log('GENAP');
    }else{
        console.log('GANJIL');
    }
}



// untuk kelipatan 3
for(var number=1;number<=100;number+=2){
    if( number %3==0){
        console.log(number+ ' Kelipatan 3');
    }else{
    console.log(' "" ');
    }   
}


// untuk kelipatan 5
for(var lipat5=1;lipat5<=100;lipat5+=5){
    if(lipat5 %6==0){
        console.log(lipat5+ ' Kelipatan 6');
    }else{
        console.log(' "" ');
    }
}

// untuk kelipatan 9
for(var lipat9=1;lipat9<=100;lipat9+=9){
    if(lipat9 %10==0){
        console.log(lipat9 + ' Kelipatan 10');
    }else{
        console.log(' "" ');
    }
}