import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';

export default function ResultsList() {
    const [results,setResults] = useState([])

    useEffect(()=>{
      loadStudents();
    },[])
  
    const loadStudents=async()=>{
      const result= await axios.get("http://localhost:8080/results");
      setResults(result.data);
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course Name</th>
              <th scope="col">Student Name</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>

            {
                results.map((result, index) => (
                    <tr>
                    <th scope="row" key={index} > {index+1} </th>
                    <td>{result.course.coursename}</td>
                    <td>{result.student.firstname}{result.student.lastname}</td>
                    <td>{result.score}</td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}
