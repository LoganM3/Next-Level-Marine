import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import NavBar from './components/NavBar';
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter className="body">
     <NavBar/>
     
     <Routes> 
       <Route index element = {<Home/>} /> 
       <Route path="services" element = {<Services/>} />
       <Route path="contact" element = {<Contact/>} />
      </Routes> 
      <Footer/>
  
      </BrowserRouter>

  );
}

export default App;
