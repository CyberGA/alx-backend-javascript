const updateStudentGradeByCity = (students, city, newGrades) => {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  const res = students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((grade) => grade.studentId === student.id);
      student.grade = grade ? grade.grade : "N/A";
      return student;
    });
  return res;
};

export default updateStudentGradeByCity;
