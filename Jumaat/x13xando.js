function xo(str) {
    var hasilx=0
    var hasilo=0
    for(var i=0;i<str.length;i++){  //perulangan untuk mencari huruf x (i)
        if(str[i] === 'x'){
            hasilx++
        }else{
            hasilo++
        }     
    }
    if(hasilx===hasilo){
        return true
    }else{
        return false
    }
}
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true