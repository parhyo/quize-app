import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Quize from './component/Quize';
import Result from './component/Result';
// import Qustions from './component/Qustions';
import Saval from './component/Saval';
import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className='container'> 


      <Navbar bg="dark" variant="dark">
        <Container>

          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/qustion">Add Qustions</Nav.Link>
            <Nav.Link href="/quize">Exam</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/qustion"  element={<Saval/>}/>
            <Route path="/result"  element={ <Result/>}/>
            <Route path="/quize"  element={<Quize/>}/>
         </Routes>
      </BrowserRouter>
      
     
      
      </div>
    </div>
  );
}

export default App;
