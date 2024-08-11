import React, { useState } from 'react';
import About from './components/About';
import NavbarFunction from './components/NavbarFunction';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function BookList() {
  const [text, setText] = useState("");
  const [completeText, setCompleteText] = useState("");
  const [mode, setmode] = useState("light");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const toggleMode = () => {
    console.log("dksbdkjsbfjksb");
  };

  const textChange = () => {
    setText(text.toUpperCase());
  };

  const handleComplete = () => {
    console.log("jdbjkdsbvkdsjvbdskjvbskvbs");
  };

  const clearText = () => {
    setCompleteText("");
    setText("");
  };

  const darkmode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
           
              <Link to="/about">About</Link>
              <Link to="/nav">Navbar</Link>
            </li>
         
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/nav" element={<NavbarFunction />} />

        </Routes>
      </div>
    </Router>
  );
}

export default BookList;
