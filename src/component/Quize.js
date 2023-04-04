import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import "./All.css";
import { Link } from "react-router-dom";

function Quize() {
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
    if (currentQuestion + 1 < getdata.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswerId({
        id: "",
        answer: "",
      });
    }
    var answerdata = {};
    const que = getdata[currentQuestion];
    // console.log(alldata);
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

  


  const optionClicked = (id) => {
    setAnswerId({
      ...answerId,
      id: getdata[currentQuestion].Questionid,
      answer: id,
    });
  };


  const preview=()=>{
  
  }
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/qustion">Add Qustions</Nav.Link>
            <Nav.Link href="/quize">Exam</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {finalResult ? (
        <>
          <div className="finalresult mt-5">
            <h1>final result</h1>
            <h2>
              {score} correct out of {getdata.length}
            </h2>
          </div>
          <div className="w-50 mt-1 mx-auto">
          <Link to='/result'>
            <Button onClick={() => preview()} className="bg-success mt-3">Preview</Button>
          </Link>
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
              <div className="mt-1">
                {getdata[currentQuestion].Options.map((ele, index) => {
                  return (
                    <ul
                      className="list-unstyled"
                      key={index}
                      onClick={() => optionClicked(ele.options)}
                    >
                      <li
                        className={
                          ele.options === answerId?.answer ? "options1" : "options"
                        }
                      >
                        {ele.options}
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
