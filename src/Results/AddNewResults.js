import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddNewResults() {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedScore, setSelectedScore] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));

    fetch('http://localhost:8080/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const [notification, setNotification] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      score: selectedScore,
      student: {
        id: selectedStudent
      },
      course: {
        id: selectedCourse
      }
    };

    try {
      await axios.post("http://localhost:8080/result", data);
      setNotification("Result added successfully!");

      setTimeout(() => {
        setNotification("");
      }, 3000);

      //clear the input values
      setSelectedCourse('');
      setSelectedStudent('');
      setSelectedScore('');
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Add New Result</h2>
        {notification && <div className="alert alert-success">{notification}</div>}

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
              <label htmlFor="courseName" className="form-label">Course name</label>
              <select id="courseName" className="form-select" value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)} required>
                <option value="">-Select-</option>
                {courses.map(course => (
                  <option key={course.id} value={course.id}>{course.coursename}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="studentName" className="form-label">Student name</label>
              <select id="studentName" className="form-select" value={selectedStudent} onChange={e => setSelectedStudent(e.target.value)} required>
                <option value="">-Select-</option>
                {students.map(student => (
                  <option key={student.id} value={student.id}>{student.firstname}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="score" className="form-label">Score</label>
              <select id="score" className="form-select" value={selectedScore} onChange={e => setSelectedScore(e.target.value)} required>
                <option value="">-Select-</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
