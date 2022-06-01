import './App.css';
import WeatherMain from './components/WeatherMain/WeatherMain';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import WeatherDashboard from './components/WeatherDashboard/WeatherDashboard';
import { Container, Row, Col ,Navbar,Nav} from 'react-bootstrap';
 function App() {
  return (
    <Router>

    <div className="App">
        {/* <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link to="/">Landing</Nav.Link>
                <Nav.Link to="/dashboard">dashboard</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
      <Routes>
         
          <Route path='/' element={<WeatherMain />}></Route>
          <Route path="/dashboard" element={<WeatherDashboard/>} />

      </Routes>
    </div>
      </Router>

  );
}

export default App;
