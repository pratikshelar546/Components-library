
import './App.css';
import "./styles.css"
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home"
import Nav from "./components/Nav"
import Project from "./components/project"
import Fotter from './components/fotter';
function App() {
  return (
    <>
<Nav/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/project' element={<Project/>} />
  </Routes>
  <Fotter/>
    </>
  );
}

export default App;
