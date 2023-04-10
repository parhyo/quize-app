import "./App.css";
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Chatbox from "./Chatbox/Chatbox";
import Mixer from "./components/Login/Mixer";


function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mixer/>} />
        <Route path="/chatbox"  element={<Chatbox/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
