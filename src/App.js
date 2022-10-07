import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Navbar";
import Home from "./Home";
import History from "./History";
import About from "./About";
import Registration from "./Registration";
import Footer from "./Footer";
import "./App.css";
import Feedback from "./Feedback";

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/student")
      .then((resp) => resp.json())
      .then(setStudents);
  }, []);
  console.log(students);
  return (
    <div className="main">
      <NavBar />
      <Switch>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/about">
          <About students={students} />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
