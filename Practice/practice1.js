
// ======================================
// Student Management System
// ======================================

// 1. Variables
const schoolName = "ABC University";
let students = [];

// 2. Student Data
const student1 = {
    id: 101,
    name: "Rahim",
    age: 22,
    department: "CSE",
    marks: 85
};

const student2 = {
    id: 102,
    name: "Karim",
    age: 23,
    department: "CSE",
    marks: 72
};

const student3 = {
    id: 103,
    name: "Sakib",
    age: 21,
    department: "EEE",
    marks: 45
};

// 3. Add Students
students.push(student1);
students.push(student2);
students.push(student3);

// 4. Display All Students
function displayStudents() {
    console.log("===== Student List =====");

    students.forEach((student, index) => {
        console.log(`Student ${index + 1}`);
        console.log("ID:", student.id);
        console.log("Name:", student.name);
        console.log("Age:", student.age);
        console.log("Department:", student.department);
        console.log("Marks:", student.marks);
        console.log("--------------------");
    });
}

// 5. Add New Student
function addStudent(id, name, age, department, marks) {
    const newStudent = {
        id,
        name,
        age,
        department,
        marks
    };

    students.push(newStudent);
    console.log(name + " added successfully!");
}

// 6. Search Student
function searchStudent(id) {
    const student = students.find(s => s.id === id);

    if (student) {
        console.log("Student Found:", student);
    } else {
        console.log("Student Not Found!");
    }
}

// 7. Update Student Marks
function updateMarks(id, newMarks) {
    const student = students.find(s => s.id === id);

    if (student) {
        student.marks = newMarks;
        console.log("Marks Updated!");
    } else {
        console.log("Student Not Found!");
    }
}

// 8. Delete Student
function deleteStudent(id) {
    students = students.filter(s => s.id !== id);
    console.log("Student Deleted!");
}

// 9. Check Pass or Fail
function checkResult(student) {
    if (student.marks >= 50) {
        return "PASS";
    } else {
        return "FAIL";
    }
}

// 10. Calculate Grade
function calculateGrade(marks) {
    if (marks >= 80) {
        return "A+";
    } else if (marks >= 70) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else {
        return "F";
    }
}

// 11. Display Results
function displayResults() {
    console.log("===== Student Results =====");

    students.forEach(student => {
        console.log(
            student.name,
            "Result:", checkResult(student),
            "Grade:", calculateGrade(student.marks)
        );
    });
}

// 12. Calculate Average Marks
function calculateAverage() {
    if (students.length === 0) {
        return 0;
    }

    const total = students.reduce(
        (sum, student) => sum + student.marks, 0
    );

    return total / students.length;
}

// 13. Find Topper
function findTopper() {
    if (students.length === 0) {
        console.log("No students available.");
        return;
    }

    const topper = students.reduce((top, student) => {
        return student.marks > top.marks ? student : top;
    });

    console.log("Topper:", topper.name);
    console.log("Marks:", topper.marks);
}

// 14. Filter Passed Students
function getPassedStudents() {
    return students.filter(student => student.marks >= 50);
}

// 15. Sort Students by Marks
function sortStudents() {
    const sorted = [...students].sort(
        (a, b) => b.marks - a.marks
    );

    console.log("===== Sorted Students =====");
    sorted.forEach(student => {
        console.log(student.name, student.marks);
    });
}

// 16. Count Students
function countStudents() {
    console.log("Total Students:", students.length);
}

// 17. Department Search
function searchDepartment(department) {
    const result = students.filter(
        student => student.department === department
    );

    console.log("Department:", department);
    console.log(result);
}

// 18. Arrow Function
const welcome = () => {
    console.log("Welcome to " + schoolName);
};

// 19. Template Literals
function studentInformation(student) {
    return `
    Name: ${student.name}
    Department: ${student.department}
    Marks: ${student.marks}
    Grade: ${calculateGrade(student.marks)}
    `;
}

// 20. Main Program
welcome();

displayStudents();

addStudent(104, "Nayeem", 22, "CSE", 90);

searchStudent(101);

updateMarks(102, 88);

displayResults();

console.log("Average Marks:", calculateAverage());

findTopper();

console.log("Passed Students:", getPassedStudents());

sortStudents();

countStudents();

searchDepartment("CSE");

console.log(studentInformation(students[0]));
