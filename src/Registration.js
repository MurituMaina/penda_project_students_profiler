import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Registration() {
  const [students, setStudents] = useState({
    fname: "",
    lname: "",
    stdemail: "",
    image: "",
    year: "",
    ageOnProject: "",
    college: "",
    course: "",
    yearcompleted: "",
    job: "",
    employer: "",
  });
  function handleStudentsInputs(event) {
    setStudents({ ...students, [event.target.name]: event.target.value });
  }
  function handleStudentDetails(e) {
    e.preventDefault();
    fetch("http://localhost:3000/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname: students.fname,
        lname: students.lname,
        image: students.image,
        stdemail: students.stdemail,
        year: students.year,
        ageOnProject: students.ageOnProject,
        college: students.college,
        course: students.course,
        yearcompleted: students.yearcompleted,
        job: students.job,
        employer: students.employer,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    console.log(document.getElementsByClassName("form"));
    setStudents([]);
  }

  return (
    <div className="register">
      <NavLink to="/about">
        <button className="closebtn_1">X</button>
      </NavLink>
      <h1>Student Registration details</h1>

      <div>
        <form className="form " onSubmit={handleStudentDetails}>
          <NavLink to="/about">
            <button className="closebtn_2">X</button>
          </NavLink>
          {/* <i class="fa fa-close" style="font-size:48px;"></i> */}
          <h2>Add Penda Student</h2>
          <label>Enter First Name: </label>
          <br />
          <br />
          <input
            type="text"
            name="fname"
            placeholder="Enter First  Name e.g Doe"
            value={students.fname}
            onChange={handleStudentsInputs}
          />
          <br />
          <br />
          <label>Enter Last Name: </label>
          <br />
          <br />
          <input
            type="text"
            name="lname"
            placeholder="Enter Last Name e.g John"
            value={students.lname}
            onChange={handleStudentsInputs}
          />
          <br />
          <br />
          <label>Enter Email address</label>
          <br />
          <br />
          <input
            type="email"
            name="stdemail"
            placeholder="your_name@example.com"
            value={students.stdemail}
            onChange={handleStudentsInputs}
          />
          <br />
          <br />
          <label>School and College(if any) </label>
          <br />
          <br />
          <input
            type="text"
            name="college"
            placeholder="Example College "
            value={students.college}
            required
            onChange={handleStudentsInputs}
          />
          <br />
          <br />
          <label>Course of Study</label>
          <br />
          <br />
          <input 
            type="text"
            name="course"
            value={students.course}
            onChange ={handleStudentsInputs}
          />
          <br />
          <br />
          <label>Year You Joined College: </label>
          <br />
          <br />
          <input
            type="number"
            min ="2008"
            max= "2100"
            name="year"
            value={students.year}
            onBlur={handleStudentsInputs}
          />
          <br />
          <br />
          <label>Years on the Project</label>
          <br />
          <br />
          <input
            type="number"
            name="ageOnProject"
            value={students.ageOnProject}
            onChange={handleStudentsInputs}
          />
          <br />
          <br />
          <label>Completion of Year</label>
          <br />
          <br />
          <input
            type="number"
            name="yearcompleted"
            min="2008"
            max="2030"
            value={students.yearcompleted}
            onBlur={handleStudentsInputs}
          ></input>
          <br />
          <br />
          <label>Occupation</label>
          <br />
          <br />
          <input
            type="text"
            name="job"
            value={students.job}
            onChange={handleStudentsInputs}
          />
          <br />
          <br />
          <label>Employer/Company</label>
          <br />
          <br />
          <input 
            type="text"
            name="employer"
            value={students.employer}
            onChange ={handleStudentsInputs}
          />
          <br />
          <br />
          <label>Add your Photo Link</label> <br />
          <br />
          <input type="url" name="image" onChange={handleStudentsInputs} />
          <br />
          <br />
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
}
export default Registration;
