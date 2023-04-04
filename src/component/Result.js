import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Result() {
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState();


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("question")) || [];
    const answerData = JSON.parse(localStorage.getItem('answer'));
    setAnswer(Object.values(answerData))
    setQuestions(data);
  }, []);

  
  return (
    <div>
     <table className="table">
  <thead>
    <tr>
      <th>Question</th>
      <th>Options</th>
      <th>Answer</th>
      <th>Selected Option</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
</table>

    </div>
  );
}

export default Result;
