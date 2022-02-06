import Navbar from "react-bootstrap/Navbar";
import { Offcanvas, Container } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import "./Navibar.css";

function NaviBar() {
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">FX's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="top">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <h5>About FX</h5>
            <p>
              Data Analyst based in Perth, Australia. Always keen to explore more and create wonderful data projects.
              <br />
              Currently employed by CorpCloud, been involved in several data projects related to performance metrics.
              <br />
              I'm always trying new things and pushing myself to be better, so do check-in to look at more projects to come
            </p>
            <BsLinkedin className="icons" onClick={(event) => window.open("https://www.linkedin.com/in/distinctivefx/", "_blank")} />
            <BsGithub className="icons" onClick={(event) => window.open("https://github.com/foofx88", "_blank")} />
            <BsInstagram className="icons" onClick={(event) => window.open("https://github.com/foofx88", "_blank")} />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NaviBar;
