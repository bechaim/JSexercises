"use strict"
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
const oldGrades = grades.slice(); // This is a backup for the last part, since grades.sort overrides original .grades

//Pt. 1 - The range of the grades (difference between highest and lowest)

function range(gradesValue) {
    gradesValue.sort();
    let topgrade = gradesValue[gradesValue.length - 1]
    let bottomgrade = gradesValue[0]
    return (topgrade - bottomgrade)
} 

console.log("Range: ", range(grades));

//Pt. 2 - The median grade (the grade in the middle)

function middleGrade(gradesValue) {
    let len = gradesValue.length;
    let mid = Math.ceil(len / 2);
    return mid;
}

function median(gradesValue) {
    gradesValue.sort();
    let medianValue;
    let middleIndex = middleGrade(gradesValue);
    if (gradesValue.length % 2 == 0)
        medianValue = (gradesValue[middleIndex] + gradesValue[middleIndex - 1]) / 2;
    else
        medianValue = gradesValue[middleIndex - 1];
    return medianValue;
}

console.log("Median: ", median(grades));

//Pt. 3 - The range of the grades from the second half of the school year

const gradesHalf = oldGrades.splice(middleGrade(oldGrades), grades[grades.length - 1])

console.log("Half Range: ", range(gradesHalf));
