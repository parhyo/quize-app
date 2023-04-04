import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Quize from './component/Quize';
import Result from './component/Result';
// import Qustions from './component/Qustions';
import Saval from './component/Saval';

function App() {
  return (
    <div className="App">
      <div className='container'> 

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
