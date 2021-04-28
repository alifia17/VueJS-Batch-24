var soal = "Soal ke: "
var pembatas = "==============================="

//soal1
var soal1 = "1"
console.log(soal+soal1);

var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";
var kata1 = pertama.substr(0,5); //ngambil potongan2 kata
var kata2 = pertama.substr(12,7);
var kata3 = kedua.substr(0, 8);
var kata4 = kedua.substr(8,10);
var up4 = kata4.toUpperCase(); //javascript ke JAVASCRITP
console.log(pertama);
console.log(kedua);
console.log('Output: '+kata1.concat(kata2).concat(kata3).concat(up4));
console.log(pembatas);
//----------------------------------------------------------------------------------------------
//soal 2
var soal2 = "2"
console.log(soal+soal2);
//Deklarasi var dengan tipe data string
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";
//Operasi matematika sekaligus diubah datanya ke int dengan "Number"
hasil = Number(kataPertama) + Number(kataKedua) * Number(kataKetiga) + Number(kataKeempat);
console.log('Output: '+hasil);
console.log(pembatas);

/*soal Nomor 2: cara yang lebih panjang, maaf mas ini buat catatan belajar saya. Awalnya saya pakai yg ini kemudian saya coba cara yang lebih singkat seperti jawaban diatas
//Deklarasi var dengan tipe data string
var intro = "Catatan cara panjang no2"
console.log(intro)
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";
//ubah data string ke int
var num1 = Number(+kataPertama);
var num2 = Number(+kataKedua);
var num3 = Number(+kataKetiga);
var num4 = Number(+kataKeempat);
//Operasi Matematika
hasil = num1+(num2*num3)+num4;

//console
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log('Hasil Operasi: '+hasil); */
//----------------------------------------------------------------------------------------------
//Soal 3
var soal3 = "3"
console.log(soal+soal3);
var kalimat = 'wah javascript itu keren sekali';
//Masuk membuat var untuk tiap kata
var kataPertama = kalimat.substring(0,3); //dimulai dari 0 atau "W" lalu akan menampilkan 3 karakter yaitu w samppai h. kalo yg belakang 5 smp huruf "J"
var kataKedua = kalimat.substring(4,15);
var kataKetiga = kalimat.substring(15,19);
var kataKeempat = kalimat.substring(19,25);
var kataKelima = kalimat.substring(25, 31);
console.log('Kata Pertama: '+ kataPertama);
console.log('Kata Kedua: '+kataKedua);
console.log('Kata Ketiga: '+kataKetiga);
console.log('Kata Keempat: '+kataKeempat);
console.log('Kata Kelima: '+kataKelima);
console.log(pembatas);