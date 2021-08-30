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