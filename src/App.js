import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ExcavationServices from './components/Services/ExcavationServices/ExcavationServices';
import DemolitionDismantle from './components/Services/DemolitionDismantle/DemolitionDismantle';
import SitePreparations from './components/Services/SitePreparations/SitePreparations';
import Career from './components/Career/Career';
import Clientele from './components/Clientele/Clientele';
import AboutOurTeam from './components/About/AboutOurTeam/AboutOurTeam';
import CoreValues from './components/About/CoreValues/CoreValues';
import ProjectBody from "./components/Project/ProjectBody"
import Services from './components/CEService/Services';
import FloatingSocialMedia from './components/FloatingSocialMedia';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div className="App overflow-clip">

<Router>
  <ScrollToTop/>
    <Nav/>
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/aboutUs" element={<About/>} />
  <Route path="/team" element={<AboutOurTeam/>} />
  <Route path="/core" element={<CoreValues/>} />
  <Route path="/career" element={<Career/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/project" element={<ProjectBody/>} />
  <Route path="/client" element={<Clientele/>} />
  <Route path="/excavation" element={<ExcavationServices/>} />
  <Route path="/demolition" element={<DemolitionDismantle/>} />
  <Route path="/siteprep" element={<SitePreparations/>} />
  
  <Route path="/contact" element={<Contact/>} />
</Routes>
<Footer/>
    </Router>
    <FloatingSocialMedia/>
    </div>
  );
}

export default App;
