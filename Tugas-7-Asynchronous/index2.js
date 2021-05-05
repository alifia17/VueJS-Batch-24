var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

function baca(time, books, i) {
    if (i < books.length) {
        readBooksPromise(time, books[i], function (sisa) {
            if (sisa > 0){
                i += 1;
                baca(sisa, books, i);
            }
        })
    }
}
baca(10000, books, 0)

readBooksPromise(10000, books, 0)
console.log(readBooks(10000, books))


function baca(){
    if (readBooksPromise.length > 0)
    console.log(readBooks)
    return readBooksPromise
}

baca(10000, books, 0)