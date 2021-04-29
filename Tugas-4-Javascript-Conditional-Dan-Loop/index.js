// Soal 1
console.log("Soal 1")
var nilai = 84;
if(nilai >= 85){
    console.log("A")
}else if (nilai >= 75 && nilai < 85){
    console.log("B")
}else if (nilai >= 65 && nilai < 75){
    console.log("C")
}else if (nilai >= 55 && nilai < 65){
    console.log("D")
}else{
    console.log("E")
}
console.log("======================")

// Soal 2
console.log("Soal 2")
var tanggal = 17;
var bulan = 4;
var tahun = 1998;
switch(bulan) {
    case 1: {console.log('salah bulan'); break; }
    case 2: {console.log('salah bulan'); break; }
    case 3: {console.log('salah bulan'); break; }
    case 4: {console.log(tanggal+ 'April'  +tahun); break; }
    case 5: {console.log('salah bulan'); break; }
    case 6: {console.log('salah bulan'); break; }
    case 7: {console.log('salah bulan'); break; }
    case 8: {console.log('salah bulan'); break; }
    case 9: {console.log('salah bulan'); break; }
    case 10: {console.log('salah bulan'); break; }
    case 11: {console.log('salah bulan'); break; }
    case 12: {console.log('salah bulan'); break; }
    default: {console.log('salah bulan'); }
}
console.log("======================")

//Soal 3
console.log("Soal 3")
console.log("Output n=3") // membuat output n=3
var spasi = '';
for (a = 1; a <=3; a++){
    for(b = 1; b <= a; b++){
        spasi += '#';
    }
    spasi += '\n';
}
console.log(spasi);
console.log("Output n=7") // membuat output n=7
var spasi = '';
for (a = 1; a <=7; a++){
    for(b = 1; b <= a; b++){
        spasi += '#';
    }
    spasi += '\n';
}
console.log(spasi);
console.log("======================")

// Soal 4 
// Maaf mas saya nyerah, kl di run tinggal 4&5 isinya kebalik
console.log('SOAL KE-4')

console.log("Output untuk m = 3") // M=3

for (var i = 1; i <= 3; i++){
    if (i % 3 == 0) {
        console.log(i+ " - I Love VueJS")
    } else if (i % 2 == 1){ 
        console.log(i+ " - I love Programming");
    } else {
        console.log(i+ " - I love Javascript")
    }
        
}
console.log("Output untuk m = 5") // M=5

for (var i = 1; i <= 5; i++){
    if (i % 3 == 0) {
        console.log(i+ " - I Love VueJS")
    } else if (i % 2 == 1){ 
        console.log(i+ " - I love Programming");
    } else {
        console.log(i+ " - I love Javascript")
    }
        
}
console.log("Output untuk m = 7") // M=7

for (var i = 1; i <= 7; i++){
    if (i % 3 == 0) {
        console.log(i+ " - I Love VueJS")
    } else if (i % 2 == 1){ 
        console.log(i+ " - I love Programming");
    } else {
        console.log(i+ " - I love Javascript")
    }
        
}
console.log("Output untuk m = 10") // M=10

for (var i = 1; i <= 10; i++){
    if (i % 3 == 0) {
        console.log(i+ " - I Love VueJS")
    } else if (i % 2 == 1){ 
        console.log(i+ " - I love Programming");
    } else {
        console.log(i+ " - I love Javascript")
    }
        
}

// Terima kasih