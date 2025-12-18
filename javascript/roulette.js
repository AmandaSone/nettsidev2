// <div> container variables
const typeChoiceBox = document.getElementById('typeChoice')
const colorChoiceBox = document.getElementById('colorChoice')
const resultText = document.getElementById('resultText');

// buttons
const typeColor = document.getElementById('color');
const typeNumber = document.getElementById('number');
const playGameColor = document.getElementById('playCol');

// button events
typeColor.addEventListener('click', () => {
    typeChoiceBox.style.display = 'none';
    colorChoiceBox.style.display = 'block';
});
playGameColor.addEventListener('click', () => {
    colorChoiceBox.style.display = 'none';
    colorResult.style.display = 'block';
    /* const chosenCol = 'black';
    gambleCol(chosenCol) */

});



// roulette game functions

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const roulettetable = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
const black = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
const red = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];

function gambleCol(yourCol) {

const winningNum = getRandomItem(roulettetable);
const isblack = black.find(number => number === winningNum);
const isred = red.find(number => number === winningNum);
let winningCol;
if (isblack) {
winningCol = 'black';
} else if (isred) {
winningCol = 'red';
}

console.log(`${winningNum} | ${winningCol}`);

//wait what
if (yourCol == winningCol) {
    const resultText = document.getElementById('resultText');
    resultText.innerHTML = 'wow, you win';
} else {
    console.log('wow, you SUCK!!');
}


}

function gambleNum(yourNum) {

const winningNum = getRandomItem(roulettetable);
const isblack = black.find(number => number === winningNum);
const isred = red.find(number => number === winningNum);
let winningCol;
if (isblack) {
winningCol = 'black';
} else if (isred) {
winningCol = 'red';
}

console.log(`${winningNum} | ${winningCol}`);

if (yourNum == winningNum) {
    console.log('wow, you win');
} else {
    console.log('wow, you SUCK!!');
}


}