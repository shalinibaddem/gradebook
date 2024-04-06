// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
import './styles/styles.css';

const App = () => {
  const [showStatistics, setShowStatistics] = useState(false);
  const [students, setStudents] = useState([
    { id: 1, name: "James", ticketNumber: "A123", ticketTopic: "Math", examGrade: 4, ratingGrade: 3, comments: "need more practice" },
    
    { id: 2, name: "Aishini", ticketNumber: "B456", ticketTopic: "Science", examGrade: 5, ratingGrade: 4, comments: "good job...still need to improve" },
   { id: 3, name: "shlaz", ticketNumber: "C852", ticketTopic: "English", examGrade: 6, ratingGrade: 3, comments: "good job!!" },
    { id: 4, name: "Lizy", ticketNumber: "D546", ticketTopic: "Hindi", examGrade: 7, ratingGrade: 4, comments: "good job!!" },
    { id: 5, name: "Gow", ticketNumber: "C952", ticketTopic: "English", examGrade: 9, ratingGrade: 5, comments: "good job!!" },
     { id: 6, name: "Yuki", ticketNumber: "D746", ticketTopic: "Hindi", examGrade: 8, ratingGrade: 4, comments: "good job!!" },
   { id:7 , name: "Austin", ticketNumber: "A125", ticketTopic: "Math", examGrade: 4, ratingGrade: 2, comments: "practice must be done!!" },
  
    { id: 8, name: "lucy", ticketNumber: "A646", ticketTopic: "Hindi", examGrade: 8, ratingGrade: 4, comments: "good job!!...can do better" },
    { id: 9, name: "natsu", ticketNumber: "A952", ticketTopic: "English", examGrade: 9, ratingGrade: 5, comments: "good job!!...try for the best" },
  
  ]);

  const toggleStatistics = () => {
    setShowStatistics(!showStatistics);
  };

  return (
    <div className="app">
      <Header />
      <Main students={students} setStudents={setStudents} />
      {showStatistics &&  <Statistics students={students} />}
     <br></br>
      <button onClick={toggleStatistics}>
        {showStatistics ? "Hide Statistics" : "Show Statistics"}
      </button>
      <Footer />
    </div>
  );
};

export default App;

