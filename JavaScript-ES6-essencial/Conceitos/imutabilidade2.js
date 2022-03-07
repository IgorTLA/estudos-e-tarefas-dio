const students = [
    { name: 'João', grade: 4 },
    { name: 'Igor', grade: 7 },
    { name: 'Lana', grade: 10 }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log("Alunos aprovados");
console.log(getApprovedStudents(students));