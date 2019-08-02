//var string diganti jadi asterisk aja ya, terus penggunaan var a, b, x, y juga diganti jadi lebih deskriptif bisa j k l m n dst
// a b x y di ganti  kiri  dan  atas



//1. Menyusun Barisan Bintang

var rows1=5;
for(var kiri =1 ;kiri<=rows1;kiri++){
        console.log('*')
}
console.log('\n');

//2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2=5;
var asterisk ='';
for(var kiri1=1;kiri1<=rows2;kiri1++){
    for(var atas=1;atas<=rows2;atas++){
        asterisk = asterisk + '*';
    }
    asterisk += '\n';
}
console.log(asterisk);

//3.Menyusun Barisan Tangga Bintang Dengan Nested Looping


var rows3= 6;
var asterisk1 = '';
for(var kiri2=1;kiri2<=rows3;kiri2++){
    for(var atas=1;atas<=kiri2;atas++){
        asterisk1 += '*';
    }
    asterisk1 += '\n';
}
console.log(asterisk1);
    
