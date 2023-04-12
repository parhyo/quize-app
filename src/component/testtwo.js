
import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import "./All.css";
import Result from "./Result";

function Quize() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState();
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

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("question")) || [];
    const answerData = JSON.parse(localStorage.getItem('answer'));
    setAnswer(Object.values(answerData))
    setQuestions(data);
  }, []);
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
              
              
              
              {questions.map((question, i) => (
      <tr key={question.Questionid}>
       
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
               
              </div>
            </>
          </div>
        </div>
      
    </>
  );
}

export default Quize;
