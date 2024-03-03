import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs';
import { useParams } from "react-router-dom";
import '../App.css';

export default function CoursesList() {
  const [courses,setCourses] = useState([])
  //id of course to be deleted
  const {id} = useParams();

  useEffect(()=>{
    loadCourses();
  },[])

  const loadCourses=async()=>{
    const result= await axios.get("http://localhost:8080/courses");
    setCourses(result.data);
  }

  //delete course
  const deleteCourse = async (id) =>{
    await axios.delete(`http://localhost:8080/course/${id}`)
    loadCourses();
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
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>

            {
                courses.map((course, index) => (
                    <tr>
                    <th scope="row" key={index} > {index+1} </th>
                    <td>{course.coursename}</td>
                    <td>
                    <button className='btn' onClick={()=>deleteCourse(course.id)}>
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
  )
}
