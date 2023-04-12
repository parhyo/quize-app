import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./All.css";

function Quize(props) {
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [answerId, setAnswerId] = useState({
    id: "",
    answer: "",
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalResult, setFinalResult] = useState(false);
  var getdata = JSON.parse(localStorage.getItem("question"));
  var alldata = JSON.parse(localStorage.getItem("answer"));
  const nextquestion = () => {
    if (currentQuestion + 1 < props.question.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswerId({
        id: "",
        answer: "",
      });
    }
    var answerdata = {};
    const que = props.question[currentQuestion];
    answerdata = { ...alldata, [que.Questionid]: answerId.answer };
    localStorage.setItem("answer", JSON.stringify(answerdata));
  };
  useEffect(() => {
    JSON.parse(localStorage.getItem("question"));
  }, []);

  // console.log(answerdata);

  return (
    <>
      <div className="question-div mt-1 my-2">
        <h2 className="mt-1">
          Question {currentQuestion + 1} out of {props.question?.length}
        </h2>
        <div className="mt-1">
          <>
            <h2 className="questionclr mt-1">
              {props.question[currentQuestion].Question}
            </h2>
            <div className="mt-1">
              {props.question[currentQuestion].Options.map((ele, index) => {
                return (
                  <ul className="list-unstyled" key={index}>
                    <li
                      className={
                        ele.options === answerId?.answer
                          ? "options1"
                          : "options"
                      }
                    >
                      {ele.options}
                    </li>
                  </ul>
                );
              })}

              <div className="bg-secondary my-3 py-2">
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
              </div>

              <Button onClick={() => nextquestion()} className="bg-danger ">
                NEXT
              </Button>
            </div>
          </>
        </div>
      </div>
    </>
  );
}

export default Quize;
