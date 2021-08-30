const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
const oldGrades = grades.slice(); // This is a backup for the last part, since grades.sort overrides original .grades
grades.sort();
function difference(a, b) {
    dif = a - b;
    return dif;
}
//Pt. 1 - The range of the grades (difference between highest and lowest)
const lowGrade = grades[0];
const highGrade = grades[grades.length - 1];
console.log("Range: ", difference(highGrade, lowGrade));
//Pt. 2 - The median grade (the grade in the middle)
const len = grades.length;
const mid = Math.ceil(len / 2);
let median;
if (len % 2 == 0) { //If the amount of grades is even, then we need the half of the sum of both mid-range grades.
    median = (grades[mid] + grades[mid - 1]) / 2;
}
else median = grades[mid - 1];//If the amount of grades is odd, then we just get the median grade.
console.log("Median: ", median);