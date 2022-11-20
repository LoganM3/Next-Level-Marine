import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import NavBar from './components/NavBar';
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Services from "./pages/Services";
import AudioHome from "./pages/Audio/Audio-Home";
import JL from "./pages/Audio/JL-Audio";
import Fusion from "./pages/Audio/Fusion";
import Wetsound from "./pages/Audio/Wetsound";
import Roswell from "./pages/Audio/Roswell";
import RockFordFosgate from "./pages/Audio/RockFord-Fosgate";
import Lighting from "./pages/Lighting/Lighting";
import Lumitec from "./pages/Lighting/Lumitec";
import Lumishore from "./pages/Lighting/Lumishore";
import Navigation from "./pages/Navigation/Navigation";
import GarminNav from "./pages/Navigation/Garmin-nav";
import SimradNav from "./pages/Navigation/Simrad-nav";
import FurunoNav from "./pages/Navigation/Furuno-nav"
import RayMarineNav from "./pages/Navigation/RayMarine-nav";
import Comunication from "./pages/Comunication/Comunication";
import VHFS from "./pages/Comunication/VHFS";
import Antennas from "./pages/Comunication/Antennas";
import Eberes from "./pages/Comunication/Eberes";
import Sonar from "./pages/Sonar/Sonar";
import GarminSonar from "./pages/Sonar/Garmin-sonar";
import SimradSonar from "./pages/Sonar/Simrad-sonar";
import FurunoSonar from "./pages/Sonar/Furuno-sonar";
import AirMarSonar from "./pages/Sonar/AirMar-sonar";
import Radars from "./pages/Radar/Radars";
import GarminRadar from "./pages/Radar/Garmin-Radar";
import SimradRadar from "./pages/Radar/Simrad-radar";
import FurunoRadar from "./pages/Radar/Furuno-radar";
import RayMarineRadar from "./pages/Radar/RayMarine-radar";


function App() {
  return (
    <BrowserRouter className="body">
     <NavBar/>
     
     <Routes> 
       <Route index element = {<Home/>} /> 
       <Route path="services" element = {<Services/>} />
       <Route path="contact" element = {<Contact/>} />
       <Route path="audioHome" element = {<AudioHome/>} />
       <Route path="JL-Audio" element = {<JL/>} />
       <Route path="Fusion-Audio" element = {<Fusion/>} />
       <Route path="Wetsound-Audio" element = {<Wetsound/>} />
       <Route path="Roswell-Audio" element = {<Roswell/>} />
       <Route path="RockFord-Audio" element = {<RockFordFosgate/>} />
       <Route path="Lighting" element = {<Lighting/>} />
       <Route path="Lumitec" element = {<Lumitec/>} />
       <Route path="Lumishore" element = {<Lumishore/>} />
       <Route path="Navigation" element = {<Navigation/>} />
       <Route path="Garmin-nav" element = {<GarminNav/>} />
       <Route path="Simrad-nav" element = {<SimradNav/>} />
       <Route path="Furuno-nav" element = {<FurunoNav/>} />
       <Route path="RayMarine-nav" element = {<RayMarineNav/>} />
       <Route path="Comunication" element = {<Comunication/>} />
       <Route path="VHFS" element = {<VHFS/>} />
       <Route path="Antennas" element = {<Antennas/>} />
       <Route path="Eberes" element = {<Eberes/>} />
       <Route path="Radars" element = {<Radars/>} />
       <Route path="Garmin-radar" element = {<GarminRadar/>} />
       <Route path="Simrad-radar" element = {<SimradRadar/>} />
       <Route path="Furuno-radar" element = {<FurunoRadar/>} />
       <Route path="RayMarine-radar" element = {<RayMarineRadar/>} />
       <Route path="Sonar" element = {<Sonar/>} />
       <Route path="Garmin-sonar" element = {<GarminSonar/>} />
       <Route path="Simrad-sonar" element = {<SimradSonar/>} />
       <Route path="Furuno-sonar" element = {<FurunoSonar/>} />
       <Route path="AirMar-sonar" element = {<AirMarSonar/>} />
      </Routes> 
      <Footer/>
  
      </BrowserRouter>

  );
}

export default App;
