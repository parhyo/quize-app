import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./All.css";
import Result from "./Result";

function Quize() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [optionBgId, setOptionBgId] = useState();
  const [answerId, setAnswerId] = useState({
    id: "",
    answer: "",
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [finalResult, setFinalResult] = useState(false);
  var getdata = JSON.parse(localStorage.getItem("question"));
  var alldata = JSON.parse(localStorage.getItem("answer"));
  var option = JSON.parse(localStorage.getItem("currentanswer"));
  const nextquestion = () => {
    if (currentQuestion + 1 < getdata.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswerId({
        id: "",
        answer: "Skipped",
      });
      setOptionBgId(null);
    } else {
      setAnswerId({
        id: "",
        answer: "",
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
  const backquestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const quizover = () => {
    setFinalResult(true);

    var alldata = JSON.parse(localStorage.getItem("answer"));

    for (const Questionid in alldata) {
      const abc = getdata.find((item) => item.Questionid == Questionid);
      if (abc.answer == alldata[Questionid]) {
        setScore((score) => score + 1);
      }
    }
  };

  const optionClicked = (selectedOptionId, currentQustionId) => {
    // console.log(currentQustionId, "selectedOptionId");
    setOptionBgId(selectedOptionId)
    // debugger;
    setAnswerId({
      ...answerId,
      id: getdata[currentQuestion].Questionid,
      answer: selectedOptionId,
    });

    const abc = getdata[selectedOptionId];
    var selectedValue = { [currentQustionId]: selectedOptionId };
    localStorage.setItem("currentanswer", JSON.stringify(selectedValue));
  };

 
  const preview = () => {
    setButtonClicked(true);
  };
  return (
    <>
      {finalResult ? (
        <>
          <div className="finalresult mt-5">
            <h1>final result</h1>
            <h2>
              {score} correct out of {getdata.length}
            </h2>
          </div>
          <div className="w-50 mt-1 mx-auto">
            <Button onClick={preview} className="bg-success mt-3">
              Preview
            </Button>
            {buttonClicked && <Result question={getdata} options={alldata} />}
          </div>
        </>
      ) : (
        <div className="question-div mt-1">
          <h2 className="mt-1">
            Question {currentQuestion + 1} out of {getdata?.length}
          </h2>
          <div className="mt-1">
            <>
              <h2 className="questionclr mt-1">
                {getdata[currentQuestion].Question}
              </h2>
              <div className="mt-1 ">
                {getdata[currentQuestion].Options.map((ele, index) => {
                  console.log("ele", ele);
                  return (
                    <ul
                      className="list-unstyled"
                      key={index}
                      onClick={() =>
                        optionClicked(
                          ele?.id,
                          getdata[currentQuestion].Questionid
                        )
                      }
                    >
                      <li
                        className={
                          ele.value === answerId?.answer
                            ? "options1"
                            : "options"
                        }
                        style={{ backgroundColor: optionBgId == getdata[currentQuestion].Options[index].id && "rgb(27, 122, 27)",}}
                      >
                        {ele.value}
                      </li>
                    </ul>
                  );
                })}
                <Button
                  onClick={() => {
                    backquestion();
                  }}
                  className="bg-danger mt-5 me-5"
                >
                  BACK
                </Button>
                <Button
                  onClick={() => nextquestion()}
                  className="bg-danger mt-5 me-5"
                >
                  NEXT
                </Button>
                <Button
                  onClick={() => nextquestion()}
                  className="bg-danger mt-5 me-5"
                >
                  SKIP
                </Button>
                <Button onClick={() => quizover()} className="bg-success mt-5">
                  SUBMIT
                </Button>
              </div>
            </>
          </div>
        </div>
      )}
    </>
  );
}

export default Quize;