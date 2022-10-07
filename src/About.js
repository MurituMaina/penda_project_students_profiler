// import logo from "./logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";

function About({ students }) {

  if(students!=null){

  return (
    <div>
      <h1>Penda Project</h1>
      <button className="registerForm">
      <NavLink to="/registration">Registration</NavLink>
      </button>
      <h2>About Our Students</h2>
   
      <div className="studentCard">
   
      {students.map((student, index) => {
          
          return (
            <div className="card" key={index}>
              <h2>
                {student.fname} {student.lname}
              </h2>
              <img
                src={student.image}
                className="App-logo"
                alt={student.name}
              ></img>
              <h5>Year Joined College: {student.year}</h5>
              <h5>Year(s) on the Project: {student.ageOnProject}</h5>
              <h5>Email:{student.stdemail}</h5>
              <h5>College:{student.college}</h5>
              <h5>Course of Study:{student.course}</h5>
              <h5>Year of completion: {student.completion}</h5>
              <h5>Area of Occupation :{student.job}</h5>
              <h5>Employer/Company:{student.employer}</h5>
              

            </div>
          );
         
      })}
      </div> 
      <NavLink to="/"> <button >
      Go Home
      </button></NavLink>
      <li>
          <NavLink to="/about">
            <button>Back to Top ^</button>
          </NavLink>
        </li>
    </div>
  );
}
else{
 
 return(<div>
  <h1>Penda Project</h1>
  <h2>About Our Students</h2>
  <div className="studentCard ui">
    Students Data Loading...
  </div>
</div>)
}
}
export default About;
