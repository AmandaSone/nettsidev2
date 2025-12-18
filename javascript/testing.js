/* console.log('eyup');

let alder = 16;
console.log('Alder er:', alder, 'år gammel');
alder = alder + 1;

let erStudent = true;
let erVoksen = false;

let a = 6;
let b = 8;
let sum = a + b;
console.log('Summen av a og b er:', sum);
 */

//---------------------------------------------


/* let antall = 5;
console.log('Antall er:', antall);
antall = antall + 2;
console.log('Nytt antall er:', antall); */


//---------------------------------------------

//nsole.log('Hei, jeg lærer meg java script');
/* let navn = 'Amanda';
console.log('Mitt navn er:', navn);

const dato = 7;
const måned = 'September';
const år = 2009;

let alder2 = 16;
console.log('Jeg er', alder2, 'år gammel');
alder2 = alder2 + 1;
console.log('Neste år blir jeg', alder2, 'år gammel');

//---------------------------------------------

const hilsen = `Hei ${navn}`;
console.log(hilsen);
const fødselsdato = `${dato}. ${måned} ${år}`;
console.log('Min fødselsdato er:', fødselsdato); */

//---------------------------------------------

let username;

document.getElementById('mySubmit').onclick = function() {
    username = document.getElementById('myText').value;
    document.getElementById("myH1").textContent = `Hello, ${username}!`;
}
