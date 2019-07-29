var nama= 'Andy';
var peran = 'a';

if(nama===''&&peran===''){
    console.log('Nama Harus diisi');
}else if(peran===''){
    console.log('Halo '+nama+', Pilih peranmu untuk memulai game! ada 3 Peran Ksatria,Tabib,dan Penyihir!');
}else if(nama===''){
    console.log('hmmm '+peran+' memang cocok untuk kamu.tapi nama tetap harus diisi agar Dunia Proxy dapat mengenal Anda');
}else if(peran=='ksatria'){
    console.log('Selamat datang di Dunia Proxytia, '+nama);
    console.log('Halo Ksatria '+nama+', kamu dapat menyerang dengan senjatamu!');
}else if(peran=='tabib'){
    console.log('Selamat datang di Dunia Proxytia, '+nama);
    console.log('Halo Tabib '+nama+', kamu akan membantu temanmu yang teluka!');
}else if(peran=="penyihir"){
    console.log('Selamat datang di Dunia Proxytia, '+nama);
    console.log('Halo Penyihir '+nama+', ciptakan keajaiban yang membantu kemenanganmu!');
}else{
    console.log('Peranmu tidak ada di dalam game! ada 3 Peran ksatria,tabib,dan penyihir.Kami yakin kalau '+nama+' dapat menyelamatkan Dunia Proxytia!');
}
