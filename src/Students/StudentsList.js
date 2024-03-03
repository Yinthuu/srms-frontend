import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs';
import { useParams } from "react-router-dom";
import '../App.css';

export default function StudentsList() {
    const [students,setStudents] = useState([])
    //id of student to be deleted
    const {id} = useParams();

    useEffect(()=>{
      loadStudents();
    },[])
  
    const loadStudents=async()=>{
      const result= await axios.get("http://localhost:8080/students");
      setStudents(result.data);
    }

    //delete student
    const deleteStudent = async (id) =>{
      await axios.delete(`http://localhost:8080/student/${id}`)
      loadStudents();
    }


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Email Address</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>

            {
                students.map((student, index) => (
                    <tr>
                    <th scope="row" key={index} > {index+1} </th>
                    <td>{student.firstname} {student.familyname}</td>
                    <td>{student.dateofbirth}</td>
                    <td>{student.email}</td>
                    <td>
                    <button className='btn' onClick={()=>deleteStudent(student.id)}>
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
  </div>
  );
}
