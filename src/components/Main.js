// components/Main.js
import React, { useState } from 'react';
import Student from './Student';
import Details from './Details'; 

const Main = ({ students, setStudents }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showDetails, setShowDetails] = useState(false); 
  const [sortedStudents, setSortedStudents] = useState([...students]); 
  const [alphabeticalOrder, setAlphabeticalOrder] = useState("asc"); 
  const [finalGradeOrder, setFinalGradeOrder] = useState("asc"); 

  const handleRowClick = (index) => {
    setSelectedRow(index);
    setShowDetails(true); 
  };

  const handleCloseDetails = () => {
    setShowDetails(false); 
    setSelectedRow(null); 
  };

  const sortAlphabetically = () => {
    const sorted = [...students].sort((a, b) => {
      const order = alphabeticalOrder === "asc" ? 1 : -1;
      return order * a.name.localeCompare(b.name);
    });
    setSortedStudents(sorted);
    setAlphabeticalOrder(alphabeticalOrder === "asc" ? "desc" : "asc");
  };

  const sortFinalGrade = () => {
    const sorted = [...students].sort((a, b) => {
      const finalGradeA = 0.6 * a.examGrade + 0.4 * a.ratingGrade;
      const finalGradeB = 0.6 * b.examGrade + 0.4 * b.ratingGrade;
      const order = finalGradeOrder === "asc" ? 1 : -1;
      return order * (finalGradeA - finalGradeB);
    });
    setSortedStudents(sorted);
    setFinalGradeOrder(finalGradeOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="main">
      <div>
        <button onClick={sortAlphabetically}>
          {`Sort Alphabetically ${alphabeticalOrder === "asc" ? "Ascending" : "Descending"}`}
        </button>
       <span>
        <button onClick={sortFinalGrade}>
          {`Sort by Final Grade ${finalGradeOrder === "asc" ? "Ascending" : "Descending"}`}
        </button></span>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Ticket's Number</th>
            <th>Ticket's Topic</th>
            <th>Rating Grade</th>
            <th>Exam Grade</th>
            <th>Final Grade</th>
            <th>Status</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student, index) => (
            <Student
              key={student.id}
              index={index}
              student={student}
              selected={selectedRow === index}
              handleRowClick={handleRowClick}
            />
          ))}
        </tbody>
      </table>
     
      {showDetails && (
        <div className="details-container" onClick={handleCloseDetails}>
          <Details student={sortedStudents[selectedRow]} />
        </div>
      )}
    </div>
  );
};

export default Main;
