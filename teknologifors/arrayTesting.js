laerere = ["Hilde", "Bent", "Jay"]
arrayTall = [23, 21, -4, 18, 14]

person1 = {fornavn: "Hilde", etternavn: "Larsen", jobb: "Lærer", mobil: "92049938"}
person2 = {fornavn: "Bent", etternavn: "Hansen", jobb: "Lærer", mobil: "12345678"}
person3 = {fornavn: "Jay", etternavn: "Olsen", jobb: "Lærer", mobil: "87654321"}

ap = [person1, person2, person3]

for (let i = 0; i < ap.length; i++){
    console.log(ap[i].fornavn, ap[i].mobil);

}

let navn = "Hilde"
let firstLetter = navn[0]
let lastLetter = navn[navn.length - 1]

console.log("Første bokstav:", firstLetter)
console.log("Siste bokstav:", lastLetter)

for (let i = 0; i < navn.length; +ii) {
    console.log("Bokstav på plass", i, "er", navn[i]);
}

for (let i = navn.length - 1; i >= 0; i--) {
    console.log("Bokstav på plass", i, "er", navn[i]);
}