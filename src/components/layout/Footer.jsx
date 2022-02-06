import Navbar from "react-bootstrap/Navbar";
import { Container, Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BsFillCaretUpSquareFill } from "react-icons/bs";
import "./footer.css";

function Footer() {
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

  return (
      <div>
          

    <Navbar bg="light" expand={false}>
      <Container fluid>
        <span className="foot">Made with React JS and BootStrap</span>
        <OverlayTrigger key="left" placement="left" overlay={<Tooltip id={`tooltip-left`}>Return to Top</Tooltip>}>
    <Button className="back-up"><BsFillCaretUpSquareFill onClick={scrollToTop} />
    </Button>
  </OverlayTrigger>
     
      </Container>
    </Navbar>
    </div>
  );
}

export default Footer;
