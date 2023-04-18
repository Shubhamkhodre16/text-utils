import React, { useState } from "react";

export default function Textform(props) {
  const handleOnClick = (action) => {
    console.log(action);
    if (action === "upper") {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase!", "success");
    } else if (action === "lower") {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase!", "success");
    } else {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Cleared!", "success");
    }
  };

  const handleOnChange = (event) => {
    // console.log("On Clicked");
    setText(event.target.value);
    // text.select();
  };
  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change state
  // setText("new text"); //Correct way to set text
  return (
    <>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Enter Text to Analyse</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey": "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            id="exampleFormControlTextarea1"
            rows="7"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2"
          onClick={() => handleOnClick("upper")}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => handleOnClick("lower")}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => handleOnClick()}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} charters
        </p>
        <p> {0.0008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Your text to preview it"}</p>
      </div>
    </>
  );
}
