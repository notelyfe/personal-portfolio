import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Certificates from './Components/Certificates';
import Resume from './Components/Resume';
import Admin from './Components/Admin';
import Footer from './Components/Footer';
import Mode from './Components/Mode';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/certificates' element={<Certificates />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
        <Mode />
        <Footer />
      </Router>
    </>
  );
}

export default App;
