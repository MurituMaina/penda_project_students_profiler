import logo from "./logo.svg";
import React from "react";

function About(){
    return(
        <>
                <h1>Penda Project</h1>
            <div>
            <h2>student-name</h2>
            <img src={logo} className="App-logo"></img>
            </div>
        </>
    )
}
export default About