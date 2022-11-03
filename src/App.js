import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Project/Projects';
import Certificates from './Components/Certificate/Certificates';
import Resume from './Components/Resume/Resume';
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
import Spinner from './Components/Spinner';
import DeletePopUp from './Components/Admin/DeletePopup/DeletePopUp';

function App() {

  return (
    <>
      <State>
        <Router>
          <Navbar />
          <Spinner />
          <DeletePopUp />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/certificates' element={<Certificates />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/user' element={<Protected Component={AdminNav} />} />
          </Routes>
          <Mode />
          <Footer />
        </Router>
      </State>
    </>
  );
}

export default App;