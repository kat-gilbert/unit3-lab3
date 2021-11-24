
const submissions = [
{
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
},
{   
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
},
{
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
},
{   
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
}]

// just checking access to array
console.log(submissions[3].name);
console.log(submissions[0].score);

let addSubmission = (array, newName, newScore, newDate) => {
        let passed = false 
        if (newScore >= 60) {
        passed = true;
    }
        array.push({newName, newScore, newDate, passed});
    }

// test addSubmission
addSubmission(submissions, "Lion", 99, "2021-11-10");
addSubmission(submissions, "Lenny", 59, "2020-11-15");
console.log(submissions);


let deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
}
// test deleteSubmissionbsByIndex
deleteSubmissionByIndex(submissions, 3);


let deleteSubmissionsByName = (array, name) => {
    let index = array.findIndex(person => person.name === name);
    array.splice(index, 1);
}
// test deleteSubmissions by name
deleteSubmissionsByName(submissions, "Joe");
console.log(submissions);


let editSubmission = (array, index, score) => {
    array[index].score = score;
}
// test editSubmission
editSubmission(submissions, 0, 99);
console.log(submissions);


let findSubmissionByName = (array, name) => {
    let found = array.find(person => person.name === name);
    return found;
}
// text findSubmissionByName
console.log(findSubmissionByName(submissions, "Jane"));


let findLowestScore = (array) => {
    let lowScore = 100;
    let submission = {};
    for(let sub of array) {
        if (sub.score < lowScore) { 
            lowScore = sub.score; 
    //keeps looking for lower score as it changes score to the new lowest score it finds 
            submission = sub;
        }
    }
        return submission;
}
// test find lowest score
console.log(findLowestScore(submissions));


let findAverageScore = (array) => {
    let sum = 0;
    for (let sub of array) {
        sum += sub.score;
    }
    let averageScore = sum / array.length;
    return averageScore;
    }

console.log(findAverageScore(submissions));


let filterPassing = (array) => {
    let result = array.filter(passed => passed.passed === true);    
    return result;
}
console.log(filterPassing(submissions));


let filter90AndAbove = (array) => {
let above90 = array.filter(score => score.score >= 90)
    return above90;
}
console.log(filter90AndAbove(submissions));
 

// let createRange = (start, end) => {} //
