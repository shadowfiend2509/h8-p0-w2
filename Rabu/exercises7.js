//1. Menyusun Barisan Bintang

var rows1=5;
for(var i =1 ;i<=rows1;i++){
        console.log('*')
}
console.log('\n');

//2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2=5;
var string1 ='';
for(var a=1;a<=rows2;a++){
    for(var b=1;b<=rows2;b++){
        string1 += '*';
    }
    string1 += '\n';
}
console.log(string1);

//3.Menyusun Barisan Tangga Bintang Dengan Nested Looping


var rows3= 6;
var string = '';
for(var x=1;x<=rows3;x++){
    for(var y=1;y<=x;y++){
        string += '*';
    }
    string += '\n';
}
console.log(string);
    