function konversiMenit(menit){
    var hasilwaktu
    var hasiljam
    var hasilmenit

    if(menit<60){
        hasiljam = '0'
        hasilmenit = menit
    }else{
        hasiljam=Math.round(menit/60)
        hasilmenit = menit%60
        if(hasilmenit<10){
            hasilmenit = '0'+hasilmenit
        }else{
            hasilmenit = hasilmenit
        }
    }
    hasilwaktu = hasiljam + ' : ' + hasilmenit
    return hasilwaktu
}

console.log(konversiMenit(59))
console.log(konversiMenit(333))
console.log(konversiMenit(89))
console.log(konversiMenit(99))
