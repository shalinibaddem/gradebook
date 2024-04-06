// components/Student.js
import React from 'react';

const Student = ({ index, student, selected, handleRowClick }) => {
  const finalGrade = 0.6 * student.examGrade + 0.4 * student.ratingGrade;
  const status = finalGrade >= 4 ? "Passed" : "Failed";

  return (
    <tr className={selected ? "selected" : ""} onClick={() => handleRowClick(index)}>
      <td>{index + 1}</td>
      <td>{student.name}</td>
      <td>{student.ticketNumber}</td>
      <td>{student.ticketTopic}</td>
      <td>{student.ratingGrade}</td>
      <td>{student.examGrade}</td>
      <td>{finalGrade}</td>
      <td>{status}</td>
      <td>{student.comments}</td>
    </tr>
  );
};

export default Student;
