import React, { useState } from "react";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { auth } from "../Signup/firebase";

function Login(handleTWo) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLogin = (e) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       
        const user = userCredential.user;
       
    })
    .catch((error) => {
      
    });
    alert("your account is login sucssesfully")
      navigate('/chatbox')
}

  return (
    <>
       {/* <Navbar bg="dark" variant="dark"> */}
       <Button variant="link" onClick={handleShow} className="centre">
          Login Here
        </Button>
      {/* </Navbar> */}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>log-in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control  required type="password" placeholder="Password" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="me-2"
              onClick={onLogin}
            >
             Log-in
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

     </>
  );
}
export default Login;