function balikKata(kata) {
    var hasilkata=''
    for(var i=kata.length ; i>=0 ;i--){
      console.log(i)
      hasilkata+=kata[i]
    }
    return hasilkata
}

  // TEST CASES
  console.log(balikKata(' halo my name is eric'))
  console.log(balikKata('Super')); //repus

