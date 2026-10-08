let score = 10;

function showLocalScore() {
    let score = 50;
    console.log("A:", score);
}

function addBonus() {
    score += 5;
    console.log("B:", score);
}

function makeMessage() {
    let message = "Well Done!";
    console.log("C:", message);
}

console.log("1:", score);               //1: 10

showLocalScore();                       //A: 50
console.log("2:", score);               //2: 10

if (score > 5) {
    let score = 99;
    console.log("3:", score);           //3: 99
}
console.log("4:", score);               //4: 10

addBonus();                             //B: 15
console.log("5:", score);               //5: 10

makeMessage();                          //C: Well Done
