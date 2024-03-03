import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs';
import '../App.css';

export default function StudentsList() {
    const [students,setStudents] = useState([])

    useEffect(()=>{
      loadStudents();
    },[])
  
    const loadStudents=async()=>{
      const result= await axios.get("http://localhost:8080/students");
      setStudents(result.data);
    }
  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">DOB</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {
                students.map((student, index) => (
                    <tr>
                    <th scope="row" key={index} > {index+1} </th>
                    <td>{student.firstname}</td>
                    <td>{student.familyname}</td>
                    <td>{student.dateofbirth}</td>
                    <td>{student.email}</td>
                    <td>
                    <button className='btn'>
                        <BsX className="delete-icon"/>
                    </button>
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
