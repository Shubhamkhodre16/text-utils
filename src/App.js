// import logo from "./logo.svg";
// import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //wheather dark mode is enabled or not ?

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#101539";
      showAlert("Dark Mode is Enabled", "success");
      document.title = "TextUitles - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
      document.title = "TextUitles - Light  Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUitles" aboutText="About Textutiles"/> */}

      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        {/* For Alert Showing */}
        <Alert alert={alert} />

        <div className="container my-3">
          {/* // For Applyuing Router */}
          <Switch>
            <Route path="/about">{/* <About /> */}</Route>
            <Route path="/">
              <Textform
                heading="Enter the text to Analysize"
                showAlert={showAlert}
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
