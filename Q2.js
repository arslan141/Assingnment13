// Function to calculate grades based on marks
function calculateGrade(marks) {
    if (marks > 90) {
        return 'A';
    } else if (marks > 80) {
        return 'B';
    } else if (marks > 70) {
        return 'C';
    } else if (marks > 60) {
        return 'D';
    } else if (marks > 50) {
        return 'E';
    } else {
        return 'F';
    }
}

// Sample Student Records
let students = [
    { name: 'Alice', marks: 95 },
    { name: 'Bob', marks: 85 },
    { name: 'Charlie', marks: 75 },
    { name: 'David', marks: 65 },
    { name: 'Eve', marks: 55 },
    { name: 'Frank', marks: 45 }
];

// Map the grades of each student
let gradedStudents = students.map(student => {
    return { name: student.name, marks: student.marks, grade: calculateGrade(student.marks) };
});

// Group students according to grades
let groupedStudents = {};
gradedStudents.forEach(student => {
    if (!groupedStudents[student.grade]) {
        groupedStudents[student.grade] = [];
    }
    groupedStudents[student.grade].push(student);
});

// Display students grouped by grades
console.log("Students Grouped by Grades:");
for (let grade in groupedStudents) {
    console.log(`Grade ${grade}:`);
    groupedStudents[grade].forEach(student => {
        console.log(`- ${student.name} (${student.marks} marks)`);
    });
}
