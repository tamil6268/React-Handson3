import './App.css';
import React, { useState } from 'react'
function App() {
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState(
    {
      Name2: "",
      Department: "",
      Rating: "",
    }
  );
  const [allFormData, setAllFormData] = useState([]);
  const changeHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function toggleAcross() {
    setToggle(!toggle)
  }

  const submitHandler = e => {
    e.preventDefault();
    const empObj =
    {
      Name: `Name : ${formData.Name2} |`,
      Department: `Department : ${formData.Department} |`,
      Rating: `Rating : ${formData.Rating}`,
    }
    const arr = allFormData;
    arr.push(empObj);
    setAllFormData(arr)
    console.log(allFormData);
    setToggle(!toggle)
  }

  if (toggle) {
    return (
      <div id="App">
        <div id="contain">
        <h1>EMPLOYEE's FEEDBACK</h1>
          {allFormData.map((value, index) => {
            console.log(allFormData)
            return (
                <span id="child" key={index}> {value.Name} {value.Department} {value.Rating} <br /></span>
            )
          }
          )}
          <button id="backBtn" onClick={(e) => toggleAcross(e)}>Go Back</button>
        </div>
      </div>
    );
  }
  else
    return (
      <div id="App">
        <div id="container">
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <form>
            <div>
              <label htmlFor='Name'>Name : </label>
              <input type="text" name="Name2" value={formData.Name2} onChange={(e) => changeHandler(e)}></input>
            </div>
            <br />
            <div>
              <label>Department : </label>
              <input type="text" name="Department" value={formData.Department} onChange={(e) => changeHandler(e)}></input>
            </div>
            <br />
            <div>
              <label>Rating : </label>
              <input type="number" name='Rating' value={formData.Rating} onChange={(e) => changeHandler(e)}></input>
            </div>
            <br />
            <button type="button" onClick={(e) => submitHandler(e)}>Submit</button>
          </form>
        </div>
      </div>
    );
}

export default App
