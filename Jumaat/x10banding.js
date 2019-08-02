function bandingkanAngka(angka1, angka2) {
    var Hasil='';
    if(angka1<angka2){
        Hasil=true;
    }else if(angka1==angka2){
        Hasil=-1;
    }else {
        Hasil=false;
    }
    return Hasil;
  }
  
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false