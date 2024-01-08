
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Buy from './Pages/Buy';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Menu" element={<Buy/>}/>
      <Route path="/Contact" element={<Contact/>}/>
     </Routes>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
