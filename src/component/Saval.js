import React, { useEffect, useRef, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "./All.css";
import Qustionbox from "./qustionbox";

function Saval() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [addOptionInput, setAddOptionInput] = useState([
    {
      radio: "",
      options: "",
    },
  ]);

  const [question, setQuestion] = useState({
    Question: "",
    Options: [],
    answer: "",
    Questionid: 0,
  });

  const [option, setOption] = useState({
    Question: "",
    Options: [],
    answer: "",
    Questionid: 0,
  });

  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    const lastId = arr[arr.length - 1].id;
    setArr((s) => {
      return [
        ...s,
        {
          id: lastId + 1,
          type: "text",
          value: "",
        },
      ];
    });
  };

  const handlechange = (e) => {
    setQuestion({
      ...question,
      Questionid: Date.now(),
      [e.target.name]: e.target.value,
    });
  };

  const handleRightOption = (Optionid) => {
    setQuestion({
      ...question,
      Questionid: Date.now(),
      answer: Optionid,
    });
  };

  const handleSave = (e) => {
    let alldata = [];
    e.preventDefault();
    question.Options.push(...arr);
    var getdata = JSON.parse(localStorage.getItem("question"));
    if (getdata == null) {
      alldata.push(question);
    } else {
      alldata.push(...getdata, question);
    }
    localStorage.setItem("question", JSON.stringify(alldata));

    setQuestion({
      Question: "",
      Options: [],
      answer: "",
      Questionid: 0,
    });

    setArr(inputArr);
    var radio = document.getElementById("radiobtn");
    radio.checked = false;
  };

  return (
    <>
      <div className="qustion_main">
        <div className="w-50 container w-75 mt-1 quediv p-3 rounded-5 bg-secondary">
          <h3>Please Entere Your Qustion</h3>
          <Form>
            <InputGroup className="mb-5 d-flex justify-content-center">
              <Form.Control
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={question.Question}
                className="mt-3"
                type="text"
                name="Question"
                onChange={(e) => handlechange(e)}
                placeholder="Add Question"
              />
            </InputGroup>

            <div className="w-75 mx-auto">
              <div className="w-50  mx-auto">
                <div>
                  {arr.map((item, i) => {
                    return (
                      <>
                        <Qustionbox
                          item={item}
                          setArr={setArr}
                          handleRightOption={handleRightOption}
                        />
                      </>
                    );
                  })}
                  <Button onClick={addInput}>Add More</Button>
                </div>
              </div>
            </div>

            <div className="mt-5 d-flex justify-content-end">
              <Button variant="success" onClick={handleSave}>
                Save
              </Button>
            </div>

            <Form.Check 
            className="d-flex justify-content-start"
        type="switch"
        id="custom-switch"
      />

      <label  className="d-flex justify-content-start mt-3">choose multiple qustion</label>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Saval;
