function sumDigits(n) {
    if (n < 10) {
        return n;
    }
    return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(1234)); //sumDigits(1234) = 4 + sumDigits(123) = 4 + 3 + sumDigits(12) = 4 + 3 + 2 + sumDigits(1) = 4 + 3 + 2 + 1 = 10;
console.log(sumDigits(9));
console.log(sumDigits(99999));