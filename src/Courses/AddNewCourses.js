import React, { useState } from 'react'
import axios from 'axios';

export default function AddNewCourses() {

  const [course, setCourse]=useState({
    coursename:""
})
  const {coursename} =  course;
  const [notification, setNotification] = useState("");

  const onInputChange=(e)=>{
    setCourse({...course, [e.target.name]:e.target.value})  
  }

  const onSubmit =async (e)=>{
    e.preventDefault();
    try {
        await axios.post("http://localhost:8080/course", course)
        //show noti
        setNotification("A new course is created successfully!");
        setTimeout(() => {
            setNotification("");
        }, 3000);
        // clear all values
        setCourse({
          coursename: ""
        });
    } catch (error) {
        console.error("Error:", error);
    }
};

  return (
    <div className="container">
    <div className="row">
        <div className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Add New Course</h2>
        {notification && <div className="alert alert-success">{notification}</div>}
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
            <label htmlFor="coursename" className="form-label">Course name</label>
            <input type={"text"} className="form-control" name="coursename" value={coursename} onChange={(e)=>onInputChange(e)} required/>
            </div>

            <div className="center-button">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
        </div>
    </div>
  </div>
  )
}
