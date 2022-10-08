import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import "./App.css";
import Footer from "./Footer";
import History from "./History";
import Home from "./Home";
import NavBar from "./Navbar";
import Registration from "./Registration";


function App() {
  const [students, setStudents] = useState([]);
  const[verses, setVerses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/student")
      .then((resp) => resp.json())
      .then(setStudents);

      fetch("http://localhost:3000/verses")
      .then((resp) => resp.json())
      .then(setVerses);
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
          <Home verses={verses}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
