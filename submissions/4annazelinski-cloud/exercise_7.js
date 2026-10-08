const sentence = "the cat and the dog and the bird";
const words = sentence.split(" ");

console.log(sentence.split(" "));
console.log('Number of words:', words.length);

const wordCounts = words.reduce((match, word) => {
    match[word] = (match[word] || 0) + 1;
    return match;
}, {});
console.log('Word Counts:', wordCounts);

const longestWord = words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
}, "");
console.log(`Longest word: ${longestWord}`);
