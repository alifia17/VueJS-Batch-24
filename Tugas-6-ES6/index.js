//Soal 1
console.log("SOAL 1")
let p = 6;
let l = 4;

const hitLuas = () => {
    let luas = p*l;
    console.log(luas)
}

const hitkel = () => {
    let kel = 2 * (p+l);
    console.log(kel)
}

hitLuas() //memanggil function hitLuas
hitkel()
console.log("==============================")


//Soal 2
console.log("SOAL 2")

newFunction = (firstName, lastName) => {
    firstName; lastName;
    return {
      fullName() {
        console.log(firstName + " " + lastName)
      }
    }
    
}
newFunction("William", "Imoh").fullName();
console.log("==============================")


//Soal 3
console.log("SOAL 3")

  const newObject = {
    firstName: "Alifia",
    lastName: "Putrindika",
    address: "Bekasi",
    hobby: "Fangirl to Kpop hehe",
  };

  const {firstName, lastName, address, hobby} = newObject // metode destructuring
  console.log(firstName, ";",  lastName, ";", address, ";" , hobby)
  console.log("==============================")

//Soal 4
console.log("SOAL 4")

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east] //array spreading ES6

console.log(combined) 
console.log("==============================")

//Soal 5
console.log("SOAL 5")

const planet = "earth" 
const view = "glass" 

const before =`Lorem ${view} dolor sit amet, consesctetur adipiscing elit ${planet}` //menyederhanakan dengan template literals es6

console.log(before)
 
 
  



