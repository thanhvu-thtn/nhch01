import { Container } from 'react-bootstrap';
import './App.css';
import MyNavbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import Folders from './components/Folders/Folders';
import ChuDes from './components/ChuDes/ChuDes';
import CauHois from './components/CauHois/CauHois';
import DeThis from './components/DeThis/DeThis';
import Login from './components/Login/Login';
import DacTas from './components/DacTas/DacTas';
const App = () => {
  return (
    <Router>
      <Container className='container'>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/folder" element={<Folders />} />
          <Route path="/chude" element={<ChuDes />} />
          <Route path="/cauhoi" element={<CauHois />} />
          <Route path="/dethi" element={<DeThis />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dacta" element={<DacTas />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;