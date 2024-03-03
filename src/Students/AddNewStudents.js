import axios from 'axios';
import React, { useState } from 'react'
import validator from 'validator';

export default function AddNewStudents() {

    const [student, setStudent]=useState({
        firstname:"",
        familyname:"",
        dateofbirth:"",
        email:"",
    })

    const {firstname, familyname, dateofbirth, email} =  student;
    const [notification, setNotification] = useState("");
    const [emailError, setEmailError] = useState("");

    const onInputChange=(e)=>{
      setStudent({...student, [e.target.name]:e.target.value});
      if (e.target.name === 'email') {
        setEmailError(validator.isEmail(e.target.value) ? "" : "Please enter a valid email address");
    }
    }

    const onSubmit =async (e)=>{
        e.preventDefault();
        // validate date of birth is atleast 10 years
        const currentDate = new Date();
        const birthDate = new Date(dateofbirth);
        const diffInYears = (currentDate - birthDate) / (1000 * 60 * 60 * 24 * 365);
        if (diffInYears < 10) {
            setNotification("");
            setEmailError("");
            alert("Date of birth must be at least 10 years old.");
            return;
        }

        if (!validator.isEmail(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }
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
                <label htmlFor="firstname" className="form-label">First name</label>
                <input type="text" className="form-control" name="firstname" id="firstname" value={firstname} onChange={(e)=>onInputChange(e)} required/>
                </div>

                <div className="mb-3">
                <label htmlFor="familyname" className="form-label">Family name</label>
                <input type="text" className="form-control" name="familyname" id="familyname" value={familyname}  onChange={(e)=>onInputChange(e)} required/>
                </div>

                <div className="mb-3">
                <label htmlFor="dateofbirth" className="form-label">Date Of Birth</label>
                <input type="date" className="form-control" name="dateofbirth" id="dateofbirth" value={dateofbirth} onChange={(e)=>onInputChange(e)} required/>
                </div>

                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name="email" id="email" value={email} onChange={(e)=>onInputChange(e)} required/>
                 {emailError && <div className="text-danger">{emailError}</div>}
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
