import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./All.css";


function Home() {
  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/qustion">Add Qustions</Nav.Link>
              <Nav.Link href="/quize">Exam</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="img_div">
        <img src="https://t4.ftcdn.net/jpg/03/10/40/41/240_F_310404162_SoQ3pGc5ctHO3B40f3YM2tnwWrV4XFlq.jpg" />
      </div>
    </div>
  );
}

export default Home;
