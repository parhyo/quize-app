import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoadingButton } from "@mui/lab";

function Translation({ doStuff, setInput, value, isLoading }) {
  return (
    <InputGroup className=" container" id="text">
      <Form.Control
        as="textarea"
        aria-label="With textarea"
        value={value}
        onChange={(e) => setInput(e.target.value)}
        cols={65}
        rows={1}
      />

      <LoadingButton loading={isLoading} variant="outlined" onClick={doStuff}>
        <ArrowRight className="fs-3" />
      </LoadingButton>
    </InputGroup>
  );
}

export default Translation;
