const students = [
  { name: 'Aarav', marks: 78, passed: true, subject: 'Math' },
  { name: 'Diya', marks: 42, passed: false, subject: 'Science' },
  { name: 'Kabir', marks: 88, passed: true, subject: 'Math' },
  { name: 'Meera', marks: 65, passed: true, subject: 'English' },
  { name: 'Rohan', marks: 38, passed: false, subject: 'Science' },
  { name: 'Isha', marks: 92, passed: true, subject: 'Math' },
  { name: 'Vivaan', marks: 75, passed: true, subject: 'English' },
  { name: 'Anaya', marks: 70, passed: true, subject: 'Science' }
]
const filteredStudents = students.filter(student => student.passed && student.marks >= 70)
console.log('1. Filtered Students (Passed AND Marks >= 70):')
console.log(filteredStudents)
console.log('')
const totalMarks = filteredStudents.reduce((sum, student) => sum + student.marks, 0)
console.log('2. Total Marks of Filtered Students:', totalMarks)
console.log('')
const toppersBySubject = {}
filteredStudents.forEach(student => {
  if (!toppersBySubject[student.subject] || student.marks > toppersBySubject[student.subject].marks) {
    toppersBySubject[student.subject] = student
  }
})
console.log('3. Topper of Each Subject (from filtered list):')
Object.entries(toppersBySubject).forEach(([subject, student]) => {
  console.log(`${subject}: ${student.name} - ${student.marks} marks`)
})
