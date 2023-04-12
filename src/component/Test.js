import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "./All.css";

function Test() {
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState();
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [answerId, setAnswerId] = useState({
  //   id: "",
  //   answer: "",
  // });


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("question")) || [];
    const answerData = JSON.parse(localStorage.getItem('answer'));
    setAnswer(Object.values(answerData))
    setQuestions(data);
  }, []);


  // var alldata = JSON.parse(localStorage.getItem("answer"));
  // var getdata = JSON.parse(localStorage.getItem("question"));
  // const nextquestion = () => {
  //   if (currentQuestion + 1 < getdata.length) {
  //     setCurrentQuestion(currentQuestion + 1);
  //     setAnswerId({
  //       id: "",
  //       answer: "",
  //     });
  //   }
  //   var answerdata = {};
  //   const que = getdata[currentQuestion];
  //   // console.log(alldata);
  //   answerdata = { ...alldata, [que.Questionid]: answerId.answer };
  //   localStorage.setItem("answer", JSON.stringify(answerdata));
    
  // };

  
  return (
<>
   



    <div>
  
    {questions.map((question, i) => (
      <tr key={question.Questionid}>
        <td>{question.Question}</td>
        <td>
          <ol className="orderlist">
            {question.Options.map((option) => (
              <li key={option.id}>{option.options}</li>
            ))}
          </ol>
        </td>
        <td>{question.answer}</td>
          <td>{answer[i]}</td>
      </tr>
    ))}


<Button
                  // onClick={() => nextquestion()}
                  className="bg-danger mt-5 me-5"
                >
                  NEXT
                </Button>

    </div>
</>    
  );
}

export default Test;


















import React, { useEffect, useState } from "react";
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
  const [singleOption1, setSingleOption1] = useState({
    options: "",
    id: "",
  });
  const [singleOption2, setSingleOption2] = useState({
    options: "",
    id: "",
  });
  const [singleOption3, setSingleOption3] = useState({
    options: "",
    id: "",
  });
  const [singleOption4, setSingleOption4] = useState({
    options: "",
    id: "",
  });
  const [cheacked, setcheacked] = useState("");
  const [cheacked1, setcheacked1] = useState("");
  const [cheacked2, setcheacked2] = useState("");
  const [cheacked3, setcheacked3] = useState("");

  const onInputChange1 = (e) => {
    setSingleOption1({
      ...singleOption1,
      id: "1",
      [e.target.name]: e.target.value,
    });
  };
  const onInputChange2 = (e) => {
    setSingleOption2({
      ...singleOption2,
      id: "2",
      [e.target.name]: e.target.value,
    });
  };
  const onInputChange3 = (e) => {
    setSingleOption3({
      ...singleOption3,
      id: "3",
      [e.target.name]: e.target.value,
    });
  };
  const onInputChange4 = (e) => {
    setSingleOption4({
      ...singleOption4,
      id: "4",
      [e.target.name]: e.target.value,
    });
  };
  const handlechange = (e) => {
    setQuestion({
      ...question,
      Questionid: Date.now(),
      [e.target.name]: e.target.value,
    });
    setcheacked(e.target.cheacked);
    setcheacked1(e.target.cheacked);
    setcheacked2(e.target.cheacked);
    setcheacked3(e.target.cheacked);
  };

  const handleSave = (e) => {
    localStorage.setItem("optionsData", JSON.stringify(arr))
  //   let alldata = [];
  //   e.preventDefault();
  //   // question.Options.push(
  //     // singleOption1,
  //     // singleOption2,
  //     // singleOption3,
  //     // singleOption4
  //   // );
  //   var getdata = JSON.parse(localStorage.getItem("question"));
  //   if (getdata == null) {
  //     alldata.push(question);
  //   } else {
  //     alldata.push(...getdata, question);
  //   }
  //   localStorage.setItem("question", JSON.stringify(alldata));
  //   reset();
  // };

  // const reset = () => {
  //   setSingleOption1({
  //     options: "",
  //     id: "",
  //   });
  //   setSingleOption2({
  //     options: "",
  //     id: "",
  //   });
  //   setSingleOption3({
  //     options: "",
  //     id: "",
  //   });
  //   setSingleOption4({
  //     options: "",
  //     id: "",
  //   });
  //   setQuestion({
  //     Question: "",
  //     Options: [],
  //     answer: "",
  //   });
  //   setcheacked(false);
  //   setcheacked1(false);
  //   setcheacked2(false);
  //   setcheacked3(false);

    




  };

  // const preview = () => {
  //   setButtonClicked(true);
  // };

  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr((s) => {
      return [
        ...s,
        {
          id: Date.now(),
          type: "text",
          value: "",
        },
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };

  useEffect(() => {
    localStorage.setItem("optionsData", JSON.stringify(arr))
  }, [arr])

  return (
    <>
      <div className="qustion_main">
        <div className="w-50 container w-75 mt-1 quediv p-3 rounded-5 bg-secondary">
          <h3>Please Entere Your Qustion</h3>
          <Form>
            <InputGroup className="mb-5 d-flex justify-content-center" >
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
              {/* <div className="w-50 d-flex mx-auto mt-1">
                <input
                  className="my-3 me-3"
                  type="radio"
                  id="radiobtn"
                  value={singleOption1.id}
                  onChange={(e) => handlechange(e)}
                  name="answer"
                  checked={cheacked}
                />

                <InputGroup className="mb-1">
                  <Form.Control
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    className="mb-3"
                    type="text"
                    name="options"
                    id="opt"
                    value={singleOption1.options}
                    onChange={onInputChange1}
                    placeholder="Option 1"
                  />
                </InputGroup>
              </div> */}

              {/* <div className="w-50 d-flex mt-1 mx-auto">
                <input
                  className="my-3 me-3"
                  type="radio"
                  id="radiobtn"
                  value={singleOption2.id}
                  onChange={(e) => handlechange(e)}
                  name="answer"
                  checked={cheacked1}
                />
                <InputGroup className="mb-1">
                  <Form.Control
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    className="mb-3"
                    type="text"
                    name="options"
                    id="opt"
                    value={singleOption2.options}
                    onChange={onInputChange2}
                    placeholder="Option 2"
                  />
                </InputGroup>
              </div> */}

              {/* <div className="w-50 d-flex mt-1 mx-auto">
                <input
                  className="my-3 me-3"
                  type="radio"
                  id="radiobtn"
                  value={singleOption3.id}
                  onChange={(e) => handlechange(e)}
                  name="answer"
                  checked={cheacked2}
                />
                <InputGroup className="mb-1">
                  <Form.Control
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    className="mb-3"
                    type="text"
                    name="options"
                    id="opt"
                    value={singleOption3.options}
                    onChange={onInputChange3}
                    placeholder="Option 3"
                  />
                </InputGroup>
              </div> */}
{/* 
              <div className="w-50 d-flex mt-1 mx-auto">
                <input
                  className="my-3 me-3"
                  type="radio"
                  id="radiobtn"
                  value={singleOption4.id}
                  onChange={(e) => handlechange(e)}
                  name="answer"
                  checked={cheacked3}
                />
                <InputGroup className="mb-1">
                  <Form.Control
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    className="mb-3"
                    type="text"
                    name="options"
                    id="opt"
                    value={singleOption4.options}
                    onChange={onInputChange4}
                    placeholder="Option 4"
                  />
                </InputGroup>
              </div> */}
              {/* <div>{buttonClicked && <Qustionbox />}</div> */}

              <div className="w-50  mx-auto">
                <div>
                  {arr.map((item, i) => {
                    return (
                      <>
                        <Qustionbox item={item} setArr={setArr}/>
                      </>
                    );
                  })}
                  <Button onClick={addInput}>Add More</Button>
                </div>
              </div>
            </div>

            <div className="mt-5 d-flex justify-content-end" >
              <Button variant="success"  onClick={handleSave}>
                Save
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

// export default Saval;

