import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
// import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { auth } from "../Signup/firebase";

function Signup() {
    const navigate=useNavigate()
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handlesubmitt = (e) => {
     
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        console.log(error);
    });
    alert("your account is Signin sucssesfully")
      // navigate('/chatbox')
    
  };

  return (
    <>
      {/* <Navbar bg="dark" variant="dark"> */}
        <Button variant="primary" onClick={handleShow} className="centre ms-5">
          Signup Here
        </Button>
      {/* </Navbar> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>sign-up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
              required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
              required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Button
              variant="danger"
              type="submit"
              className="me-2"
              onClick={handlesubmitt}
            >
              Sign-up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      
    </>
  );
}

export default Signup;
