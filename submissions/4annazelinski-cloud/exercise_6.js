const students = [
    { name: "Nino", age: 19, score: 91 },
    { name: "Giorgi", age: 17, score: 68 },
    { name: "Mariam", age: 22, score: 75 },
    { name: "Luka", age: 20, score: 55 },
    { name: "Ana", age: 18, score: 83 },
    { name: "Dato", age: 21, score: 70 },
];
const allNames = students.map(student => student.name);
console.log('Names:', allNames);

console.log('-'.repeat(5), "Passed students", '-'.repeat(5));

const passedNames = students
    .filter(student => student.score >= 70)
    .map(student => student.name)
;
console.log('Passed:', passedNames);

console.log('-'.repeat(5), "Mariam's score", '-'.repeat(5));

const mariamScore = students.find(student => student.name === 'Mariam')?.score;
console.log("Mariam's score:", mariamScore);

console.log('-'.repeat(5), "Anyone under 18?", '-'.repeat(5));

const under18 = students.some(student => student.age < 18);
console.log("Anyone under 18?", under18);

console.log('-'.repeat(5), "Above 50", '-'.repeat(5));

const above50 = students.every(student => student.score > 50);
console.log('Everyone above 50?', above50);

console.log('-'.repeat(5), "Average Score", '-'.repeat(5));

const averageScore = Number((students.reduce((sum, student) => sum 
    + student.score, 0) / students.length).toFixed(1));
console.log('Average score:', averageScore);
console.log(typeof averageScore);

console.log('-'.repeat(5), "Best Student Name", '-'.repeat(5));

const bestStudentName = students.reduce((best, current) => current.score > best.score ? current : best).name;
console.log(bestStudentName);