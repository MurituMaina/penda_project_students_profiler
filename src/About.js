// import logo from "./logo.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function About({ students, setStudents }) {
  function handleSearchStudent(e) {
    e.preventDefault();
    const search = e.target.value;
    let newStudents = [];
    console.log(search);
    // console.log(e.target)
    console.log(students);

    if (!search || search === "") {
      console.log("nothing here");
      // document.getElementsByClassName(
      //   "searchform"
      // ).innerHTML = `Nothing Matches:", ${search}`;
      // console.log("Nothing Matches:", search);

      // newStudents = [];
      setStudents(students);
      console.log(students);
    } else {
      students.filter((student) => {
          let first = student.fname;
          let last = student.lname;
          if( first === search || last === search){
          console.log(student.fname, student.lname)
           newStudents.push(student)
           return setStudents(newStudents)
        }
       return 0;
      });
    }
      console.log(newStudents);
  }

  if (students != null) {
    return (
      <div>
        <h1>Penda Project</h1>
        <button className="registerForm">
          <NavLink to="/registration">Registration</NavLink>
        </button>
        <h2 id="abt">About Our Students</h2>
        <form className="searchform" onSubmit={handleSearchStudent}>
          <input
            onChange={handleSearchStudent}
            onBlur={handleSearchStudent}
            className="input"
            type="text"
            id="search"
          />
          <button>
            <FaSearch />
          </button>
        </form>
        <div className="studentCard">
        <p>Result:<span id="error"></span></p>
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
        <NavLink to="/">
          <button>Go Home</button>
        </NavLink>
        &nbsp;&nbsp;
        <NavLink to="/registration">
          <button>Registration</button>
        </NavLink>
        &nbsp;&nbsp;
      </div>
    );
  } else {
    return (
      <div>
        <h1>Penda Project</h1>
        <h2>About Our Students</h2>
        <div className="studentCard ui">Students Data Loading...</div>
      </div>
    );
  }
}
export default About;
