import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter className="body">
     <NavBar/>
      {/* <Home/> */}
     <Routes> 
       <Route index element = {<Home/>} /> 
       <Route path="services" element = {<Services/>} />
      </Routes> 
     
      
      </BrowserRouter>

  );
}

export default App;
