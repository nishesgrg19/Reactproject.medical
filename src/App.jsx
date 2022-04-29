
import Home from './Home';
import './App.css'
import About from './About';
import Services from './Services';
import Appointment from './Appointment';
import Gallery from './Gallery';
import Contact from './Contact';
import Employee from './Employee';





import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={ <Services/>} />
        <Route path="appointment" element={ <Appointment/>} />
        <Route path="gallery" element={  <Gallery/>} />
        <Route path="contact" element={ <Contact/>} />
        <Route path="employee" element={ <Employee/>} />
        
      </Routes>
    
      
   
     

  
 
     
    </div>
  );
}

export default App;
