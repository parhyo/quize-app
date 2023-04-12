import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./All.css";

function Qustionbox({ item, setArr, handleRightOption }) {
  console.log({ item });

  const onInputChange4 = (e) => {
    setArr((pre) =>
      pre.map((ele) =>
        ele.id === item.id ? { ...ele, value: e.target.value } : { ...ele }
      )
    );
    console.log(e.target.value, "VALUE");
  };

  return (
    <div className="qustion_main ">
      <div className="w-50 container w-75 mt-1 quediv  rounded-5 bg-secondary">
        <Form>
          <div className="w-100 mx-auto">
            <div className=" d-flex mt-1 mx-auto">
              <input
                className="my-3 me-3"
                type="radio"
                id="radiobtn"
                name="answer"
                value={item.id}
                onChange={() => handleRightOption(item.id)}
              />
              <InputGroup className="mb-1">
                <Form.Control
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="mb-3"
                  type="text"
                  name="options"
                  value={item.value}
                  id="parth"
                  onChange={(e) => onInputChange4(e)}
                  placeholder="Right Option Here..."
                />
              </InputGroup>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Qustionbox;
