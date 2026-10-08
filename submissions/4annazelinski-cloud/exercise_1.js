function triple(n) {
    return n * 3;
}

console.log(triple(14));
console.log('-'.repeat(10), "tripleExpression", '-'.repeat(10));


const tripleExpression = function(n) { return n * 3; };

console.log(tripleExpression(14));
console.log('-'.repeat(10), "tripleArrow", '-'.repeat(10));


const tripleArrow = (n) => { return n * 3; };

console.log(tripleArrow(14));

const isOdd = n => n % 2 !== 0;

console.log(isOdd(7));
console.log(isOdd(10));
