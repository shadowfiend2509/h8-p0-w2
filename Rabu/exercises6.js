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

//perulangan 1-100
for(var anggka=1;anggka<=100 ; anggka++){
    console.log(anggka);
}

//ganjil genap
var counter = '300'

if(counter%2==0){
    console.log('GENAP');
}else{
    console.log('GANJIL');
}


//kelipatan 3 kelipatan 6 & kelipatan 10

if(counter%3==0 && counter%6==0 && counter%10==0){
    console.log(counter+' Kelipatan 3 dan Kelipatan 6 dan Kelipatan 10');
}else if(counter%3==0 && counter%6==0){
    console.log(counter+ ' Kelipatan 3 dan Kelipatan 6');
}else if(counter%3==0){
    console.log(counter+' Kelipatan 3');
}else if(counter%6==0){
    console.log(counter+ ' Kelipatan 6');
}else if(counter%10==0){
    console.log(counter+ ' Kelipatan 10');
}else{
    console.log('');
}

