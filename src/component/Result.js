import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./All.css";

function Quize(props) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [answerId, setAnswerId] = useState({
    id: "",
    answer: "",
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalResult, setFinalResult] = useState(false);
  var getdata = JSON.parse(localStorage.getItem("question"));
  var alldata = JSON.parse(localStorage.getItem("answer"));
  const nextquestion = () => {
    if (currentQuestion + 1 < getdata.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswerId({
        id: "",
        answer: "",
      });
    } else {
      setAnswerId({
        id: "",
        answer: "Skipped",
      });
    }
    var answerdata = {};
    const que = getdata[currentQuestion];
    answerdata = { ...alldata, [que.Questionid]: answerId.answer };
    localStorage.setItem("answer", JSON.stringify(answerdata));
  };
  useEffect(() => {
    JSON.parse(localStorage.getItem("question"));
  }, []);

  const optionClicked = (id) => {
    setAnswerId({
      ...answerId,
      id: getdata[currentQuestion].Questionid,
      answer: id,
    });
  };

  return (
    <>
      <div className="question-div mt-1">
        <h2 className="mt-1">
          Question {currentQuestion + 1} out of {getdata?.length}
        </h2>
        <div className="mt-1">
          <>
            <h2 className="questionclr mt-1">
              {getdata[currentQuestion].Question}
            </h2>
            <div className="mt-1">
              {getdata[currentQuestion].Options.map((ele, index) => {
                return (
                  <ul
                    className="list-unstyled"
                    key={index}
                    onClick={() => optionClicked(ele.options)}
                  >
                    <li
                      style={{
                        backgroundColor:
                          Object.values(alldata)[currentQuestion] == ele?.id
                            ? "#4F508A"
                            : props.question[currentQuestion].answer == ele?.id
                            ? "#207B2F"
                            : "rgb(167, 117, 156)",
                      }}
                      className={
                        ele.value === answerId?.answer ? "options1" : "options"
                      }
                    >
                      {ele.value}
                    </li>
                  </ul>
                );
              })}

              {/* <div className="sg_div mt-2">
                <div className="sk_option">
                  <h6 className="bg-green">Skipped</h6>
                </div>
              </div> */}

              {/* <div className="bg-secondary my-3 py-2">
                <h1>choosen option</h1>

                <h3 className="options">
                  <tr className="d-flex justify-content-center" id="tabler">
                    <td>{Object.values(alldata)[currentQuestion]}</td>
                  </tr>
                </h3>
              </div>

              <div className="bg-secondary my-3 py-2">
                <h1>Right option</h1>

                <h3 className="options">
                  <tr className="d-flex justify-content-center" id="tabler">
                    <td> {props.question[currentQuestion].answer}</td>
                  </tr>
                </h3>
              </div> */}

              <Button
                onClick={() => nextquestion()}
                className="bg-danger mt-5"
              >
                NEXT
              </Button>

              <div className="d-flex justify-content-between ">
                <div className="sg_div mt-1 p-3 ">
                  <div className="r_option p-2 rounded">
                    <h6 className="bg-green">Right Option</h6>
                  </div>
                </div>
                <div className="sg_div mt-1 p-3">
                  <div className="s_option p-2 rounded">
                    <h6 className="bg-green">Select Option</h6>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
}

export default Quize;
