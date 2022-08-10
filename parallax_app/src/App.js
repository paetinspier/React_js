import Home from "./components/Home";
import About from "./components/About";
import City from "./components/City";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/city' element={<City/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
