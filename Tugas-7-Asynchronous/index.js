// import readBooks from './callback.js'; //ini kl penulisan di ES6
var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// saya melakukan beberapa kali percobaan hasilnya berbeda2 mas. Pasti ada caranya kan yaaa cuma saya belum mengerti dengan baik. Terima kasih mas
// Saya kumpulkan sebisanya saja ya mas, saya nanti belajar lagi dari pembahasan, Terima kasih
readBooks(10000, books, 0)
console.log(readBooks(10000, books))


function baca(){
    if (readBooks.length > 0)
    console.log(readBooks)
    return readBooks
}

baca(10000, books, 0)
