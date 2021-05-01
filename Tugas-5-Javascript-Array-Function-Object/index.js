// Soal 1
console.log("Soal 1")
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
daftarHewan.sort()
daftarHewan.forEach(function(hewan){
    console.log(hewan)
})
console.log("======================")

// Soal 2
console.log("Soal 2")
function introduce(nama, usia, alamat, hobi){
    console.log("Nama saya" + nama, "umur saya" + usia, "alamat saya" + alamat , "dan saya punya hobby yaitu" + hobi ,"!");
}


var data = {name : "Alifia Salsabila N.P" , age : 23 , address : "Jl.Tarumajaya Bekasi" , hobby : "Fangirling-an" }


var perkenalan = introduce(data)
console.log(perkenalan) 
console.log("======================")
/*function introduce(nama, usia, alamat, hobi){
    console.log("Nama saya" + nama, "umur saya" + usia, "alamat saya" + alamat , "dan saya punya hobby yaitu" + hobi ,"!");
}
var name = "alifia";
var age = 23;
var address = "JL. Bekasi";
var hobby = "Makan";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan)*/


// Soal 3
//maaf mas saya bingung yang ini. Apa harus pakai kondisi juga ya? Terima kasih

// Soal 4
console.log("Soal 4")
function hitung(a, n){
    hasilHitung = a + (n-1 + 1) * 2;
    return hasilHitung;
}

var nilaiA = -2;
var nilaiN = 0;
var hasilPerhitungan = hitung(nilaiA, nilaiN);
console.log("hitung(0) = " + hasilPerhitungan);

var nilaiA = -2;
var nilaiN = 1;
var hasilPerhitungan = hitung(nilaiA, nilaiN);
console.log("hitung(1) = " + hasilPerhitungan);

var nilaiA = -2;
var nilaiN = 2;
var hasilPerhitungan = hitung(nilaiA, nilaiN);
console.log("hitung(2) = " + hasilPerhitungan);

var nilaiA = -2;
var nilaiN = 3;
var hasilPerhitungan = hitung(nilaiA, nilaiN);
console.log("hitung(3) = " + hasilPerhitungan);

var nilaiA = -2;
var nilaiN = 4;
var hasilPerhitungan = hitung(nilaiA, nilaiN);
console.log("hitung(4) = " + hasilPerhitungan);

var nilaiA = -2;
var nilaiN = 5;
var hasilPerhitungan = hitung(nilaiA, nilaiN);
console.log("hitung(5) = " + hasilPerhitungan);
