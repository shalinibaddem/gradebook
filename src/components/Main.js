// components/Main.js
import React, { useState } from 'react';
import Student from './Student';
import Details from './Details'; // Import the Details component

const Main = ({ students, setStudents }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showDetails, setShowDetails] = useState(false); // State to manage Details visibility
  const [sortedStudents, setSortedStudents] = useState([...students]); // State to hold sorted students
  const [alphabeticalOrder, setAlphabeticalOrder] = useState("asc"); // State to track alphabetical order
  const [finalGradeOrder, setFinalGradeOrder] = useState("asc"); // State to track final grade order

  const handleRowClick = (index) => {
    setSelectedRow(index);
    setShowDetails(true); // Show Details when a row is clicked
  };

  const handleCloseDetails = () => {
    setShowDetails(false); // Close Details when clicked outside
    setSelectedRow(null); // Clear selected row
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
        <button onClick={sortFinalGrade}>
          {`Sort by Final Grade ${finalGradeOrder === "asc" ? "Ascending" : "Descending"}`}
        </button>
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
      {/* Render Details component if showDetails is true */}
      {showDetails && (
        <div className="details-container" onClick={handleCloseDetails}>
          <Details student={sortedStudents[selectedRow]} />
        </div>
      )}
    </div>
  );
};

export default Main;
