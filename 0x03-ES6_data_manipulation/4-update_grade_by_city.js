const updateStudentGradeByCity = (students, city, newGrades) => {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  const res = students
    .filter((ele) => ele.location === city)
    .map((ele) => {
      const grade = newGrades.find((grade) => grade.studentId === ele.id);
      ele.grade = grade ? grade.grade : "N/A";
      return ele;
    });
  return res;
};
