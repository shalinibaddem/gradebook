// components/Statistics.js
import React from 'react';

const Statistics = ({ students }) => {
  const passedStudents = students.filter(student => (0.6 * student.examGrade + 0.4 * student.ratingGrade) >= 4);
  const failedStudents = students.filter(student => (0.6 * student.examGrade + 0.4 * student.ratingGrade) < 4);
  const averageGrade = students.reduce((total, student) => total + (0.6 * student.examGrade + 0.4 * student.ratingGrade), 0) / students.length;
  const maxGrade = Math.max(...students.map(student => (0.6 * student.examGrade + 0.4 * student.ratingGrade)));
  const minGrade = Math.min(...students.map(student => (0.6 * student.examGrade + 0.4 * student.ratingGrade)));

  return (
    <div className="statistics">
      <h2 text align="center" style={{backgroundColor:"  rgb(40, 93, 116)"}}>Statistics</h2>
      <p>Number of passed students: {passedStudents.length}</p>
      <p>Number of failed students: {failedStudents.length}</p>
      <p>Average grade: {averageGrade.toFixed(2)}</p>
      <p>Max grade: {maxGrade}</p>
      <p>Min grade: {minGrade}</p>
      <p>Total number of students: {students.length}</p>
    </div>
  );
};

export default Statistics;
