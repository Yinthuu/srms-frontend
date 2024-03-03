import axios from 'axios';
import React, { useState } from 'react'

export default function AddNewStudents() {

    const [student, setStudent]=useState({
        firstname:"",
        familyname:"",
        dateofbirth:"",
        email:"",
    })

    const {firstname, familyname, dateofbirth, email} =  student;
    const [notification, setNotification] = useState("");

    const onInputChange=(e)=>{
      setStudent({...student, [e.target.name]:e.target.value})  
    }

    const onSubmit =async (e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/student", student)
            //show noti
            setNotification("Successfully created a new student");
            setTimeout(() => {
                setNotification("");
            }, 3000);
            // clear all values
            setStudent({
                firstname: "",
                familyname: "",
                dateofbirth: "",
                email: ""
            });
        } catch (error) {
            console.error("Error:", error);
        }
    };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-10 offset-md-1 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Add New Sudent</h2>
            {notification && <div className="alert alert-success">{notification}</div>}
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                <label htmlFor="Firstname" className="form-label">First name</label>
                <input type={"text"} className="form-control" name="firstname" value={firstname} onChange={(e)=>onInputChange(e)} required/>
                </div>

                <div className="mb-3">
                <label htmlFor="Familyname" className="form-label">Family name</label>
                <input type={"text"} className="form-control" name="familyname" value={familyname} onChange={(e)=>onInputChange(e)} required/>
                </div>

                <div className="mb-3">
                <label htmlFor="Dateofbirth" className="form-label">Date Of Birth</label>
                <input type={"text"} className="form-control" name="dateofbirth" value={dateofbirth} onChange={(e)=>onInputChange(e)} required/>
                </div>

                <div className="mb-3">
                <label htmlFor="Email" className="form-label">Email</label>
                <input type={"text"} className="form-control" name="email" value={email} onChange={(e)=>onInputChange(e)} required/>
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
