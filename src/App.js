import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Project/Projects';
import Certificates from './Components/Certificate/Certificates';
import Resume from './Components/Resume';
import Admin from './Components/Admin/Admin';
import Footer from './Components/Footer';
import Mode from './Components/Mode';
import AdminNav from './Components/Admin/AdminNav';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import State from './Components/context/State';
import Protected from './Components/Protected';

function App() {
  return (
    <>
      <State>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/certificates' element={<Certificates />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/user' element={<Protected Component= {AdminNav} />} />
          </Routes>
          <Mode />
          <Footer />
        </Router>
      </State>
    </>
  );
}

export default App;