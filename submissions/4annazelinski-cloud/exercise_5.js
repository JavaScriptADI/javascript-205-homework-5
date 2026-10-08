function filter(array, test) {
    const result = [];
    for (const element of array) {
        if (test(element)) {
            result.push(element);
        }
    }
    return result;
};


const nums = [9, 4, 12, 7, 21, 8];
const filtredNums = filter(nums, n => n % 3 === 0);
console.log(`My filter (divisible by 3): ${filtredNums}`);

const words = ["sun", "planet", "moon", "galaxy", "star"];
const filtredWords = filter(words, w => w.length === 4);
console.log(`My filter (4-letter words): ${filtredWords}`)


const builtInN = nums.filter(n => n % 3 === 0);
console.log(`Built-in filter (divisible by 3):${builtInN}`);

const builtInW = words.filter(w => w.length === 4);
console.log(`Built-in filter (4-letter words): ${builtInW}`)
