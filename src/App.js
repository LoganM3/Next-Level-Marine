import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import NavBar from './components/NavBar';
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Services from "./pages/Services";
import AudioHome from "./pages/Audio-Home";
import Lighting from "./pages/Lighting";
import Navigation from "./pages/Navigation";
import Comunication from "./pages/Comunication";
import Sonar from "./pages/Sonar";
import Radars from "./pages/Radars";

function App() {
  return (
    <BrowserRouter className="body">
     <NavBar/>
     
     <Routes> 
       <Route index element = {<Home/>} /> 
       <Route path="services" element = {<Services/>} />
       <Route path="contact" element = {<Contact/>} />
       <Route path="audioHome" element = {<AudioHome/>} />
       <Route path="Lighting" element = {<Lighting/>} />
       <Route path="Navigation" element = {<Navigation/>} />
       <Route path="Comunication" element = {<Comunication/>} />
       <Route path="Radars" element = {<Radars/>} />
       <Route path="Sonar" element = {<Sonar/>} />
      </Routes> 
      <Footer/>
  
      </BrowserRouter>

  );
}

export default App;
