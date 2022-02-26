import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import "./projects.css";

function Projects() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);
  const [modalShow6, setModalShow6] = useState(false);
  const [modalShow7, setModalShow7] = useState(false);
  const [modalShow8, setModalShow8] = useState(false);
  const [modalShow9, setModalShow9] = useState(false);
  const [modalShow10, setModalShow10] = useState(false);
  // const [modalShow11, setModalShow11] = useState(false);
  // const [modalShow12, setModalShow12] = useState(false);

  function StoryModals(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Story Time with FX</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/cutecharts.gif" alt="logo" />
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </Modal.Body>

        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
          <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/story_time_with_FX", "_blank")}>
            Explore
          </Button>
        </OverlayTrigger>
      </Modal>
    );
  }

  function ObesityModals(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Obesity Rate - USA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/po2.gif" alt="logo" />
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </Modal.Body>

        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
          <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/ObesityRate-USA", "_blank")}>
            Explore
          </Button>
        </OverlayTrigger>
      </Modal>
    );
  }

  function CitibikeModals(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Obesity Rate - USA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/Tableau_CitiBike/main/snips/story.gif" alt="logo" />
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </Modal.Body>

        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
          <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/Tableau_CitiBike", "_blank")}>
            Explore
          </Button>
        </OverlayTrigger>
      </Modal>
    );
  }

  function ETLModals(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">ETL - Financing Used Cars</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/ETLproject.gif" alt="logo" />
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </Modal.Body>
        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
                    <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/ETL-Financing-Used-Cars", "_blank")}>
                      Explore
                    </Button>
                  </OverlayTrigger>
      </Modal>
    );
  }

  function ROEModals(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Reaction on E-learning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/reaction-on-elearning/main/static/roeDemo.gif" alt="logo" />
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </Modal.Body>
        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
                    <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/reaction-on-elearning/tree/stashed", "_blank")}>
                      Explore
                    </Button>
                  </OverlayTrigger>
      </Modal>
    );
  }

  function B3Modals(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Belly Button Biodiversity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/plotly.gif" alt="logo" />
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </Modal.Body>
        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
                    <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/Plotly-JS-BellyButtonBiodiversity", "_blank")}>
                      Explore
                    </Button>
                  </OverlayTrigger>
      </Modal>
    );
  }

  function PcpModals(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Perth City Properties</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/p3.gif" alt="logo" />
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </Modal.Body>
        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
                    <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/Perth-City-Properties", "_blank")}>
                      Explore
                    </Button>
                  </OverlayTrigger>
      </Modal>
    );
  }

  function NyModals(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">New-York State Parks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/newyorknewyork.gif" alt="logo" />
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </Modal.Body>
        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
                    <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/New-York-State-Parks", "_blank")}>
                      Explore
                    </Button>
                  </OverlayTrigger>
      </Modal>
    );
  }

  function DJModals(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Data Journalism</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/scatterplot.gif" alt="logo" />
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </Modal.Body>
        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
                    <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/D3_Manipulation-Data_Journalism", "_blank")}>
                      Explore
                    </Button>
                  </OverlayTrigger>
      </Modal>
    );
  }
  function EAModals(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Earthquake Analysis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/leafletdemo.gif" alt="logo" />
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </Modal.Body>
        <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
  <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/Leaflet-Earthquake_Analysis", "_blank")}>
    Explore
  </Button>
  </OverlayTrigger>
      </Modal>
    );
  }



  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col>
            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to Learn More</Tooltip>}>
              <Card className="card" onClick={() => setModalShow(true)}>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/story_time_with_FX/main/images/storytime-chart.png" alt="logo" />
                <Card.Body>
                  <Card.Title>Story Time with FX</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">CuteCharts, Python</Card.Subtitle>
                  <Card.Text>Created visuals from Children Story books dataset from Kaggle. Used sklearn Random Forrest Classifier and Naive Bayes to predict the Stage those stories are for. </Card.Text>
                </Card.Body>
              </Card>
            </OverlayTrigger>
            <StoryModals show={modalShow} onHide={() => setModalShow(false)} />
          </Col>
          <Col>
            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to Learn More</Tooltip>}>
              <Card className="card" onClick={() => setModalShow2(true)}>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/ObesityRate-USA/main/assets/snips/main.JPG" alt="logo" />
                <Card.Body>
                  <Card.Title>Obesity Rate - USA</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Power BI, Python</Card.Subtitle>
                  <Card.Text>
                    Recreated <a href="https://github.com/foofx88/Project_Obesity">1st Group Project</a> which was completed with Python's pandas and matplotlib. This version's visualisation was realised by Microsoft's Power BI. The dataset was revisited and further explored.
                  </Card.Text>
                </Card.Body>
              </Card>
            </OverlayTrigger>
            <ObesityModals show={modalShow2} onHide={() => setModalShow2(false)} />
          </Col>

          <Col>
            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to Learn More</Tooltip>}>
              <Card className="card" onClick={() => setModalShow3(true)}>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/Tableau_CitiBike/main/snips/fakeageuser.JPG" alt="logo" />
                <Card.Body>
                  <Card.Title>CitiBike</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Tableau</Card.Subtitle>
                  <Card.Text>Used Tableau to visualize 6 months of CitiBike usage data. Explored station's popularity, peak usage, maintenance requirements, and investigated on user's age.</Card.Text>
                </Card.Body>
              </Card>
            </OverlayTrigger>
            <CitibikeModals show={modalShow3} onHide={() => setModalShow3(false)} />
          </Col>
          <Col>
            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to Learn More</Tooltip>}>
              <Card className="card" onClick={() => setModalShow4(true)}>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/ETL-Financing-Used-Cars/main/screenshots/scrape1.jpg" alt="logo" />
                <Card.Body>
                  <Card.Title>ETL - Financing Used Cars</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">SQL, Python</Card.Subtitle>
                  <Card.Text>Extract, Load and Transformed Data from a local car dealership and finder.com.au. To Analyse between comparison loans provided by car dealer and financial institution. </Card.Text>
                </Card.Body>
              </Card>
            </OverlayTrigger>
            <ETLModals show={modalShow4} onHide={() => setModalShow4(false)} />
          </Col>
        </Row>

        <Row>
          <Col>
            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to Learn More</Tooltip>}>
              <Card className="card" onClick={() => setModalShow5(true)}>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/reaction-on-elearning/main/static/roe-mainpage.png" alt="logo" />
                <Card.Body>
                  <Card.Title>Reaction on Elearning</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">REACT JS, AntD </Card.Subtitle>
                  <Card.Text>Obtained E-learning data from Kaggle. Visualise student's reaction towards E-learning using basic AntD charts</Card.Text>
                </Card.Body>
              </Card>
            </OverlayTrigger>
            <ROEModals show={modalShow5} onHide={() => setModalShow5(false)} />
          </Col>
          <Col>
            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to Learn More</Tooltip>}>
              <Card className="card" onClick={() => setModalShow6(true)}>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/Plotly-JS-BellyButtonBiodiversity/main/snips/dashboard.png" alt="logo" />
                <Card.Body>
                  <Card.Title>Belly Button Biodiversity</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Plotly(JS), D3</Card.Subtitle>
                  <Card.Text>Utilising Plotly to create interactive charts after reading json data with D3. The charts would change according to which Subject ID is chosen.</Card.Text>
                </Card.Body>
              </Card>
            </OverlayTrigger>
            <B3Modals show={modalShow6} onHide={() => setModalShow6(false)} />
          </Col>
          <Col>
            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to Learn More</Tooltip>}>
              <Card className="card" onClick={() => setModalShow7(true)}>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/Perth-City-Properties/main/static/images/buy_or_sell.png" alt="logo" />
                <Card.Body>
                  <Card.Title>Perth City Properties</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Python, ML, SQlite, Tableau </Card.Subtitle>
                  <Card.Text>
                    Collaboration with Helen for the final project on Data BootCamp. Used splinter to scrape data, pandas to clean and Tableau to visualised the data. Prepared the data for ML. We used Lasso Linear Regression model as it provided the ideal accuracy.
                    <a href="https://cityofperthproperties.herokuapp.com/" target="_blank">
                      Go to the site
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </OverlayTrigger>
            <PcpModals show={modalShow7} onHide={() => setModalShow7(false)} />
          </Col>
          <Col>
            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to Learn More</Tooltip>}>
              <Card className="card" onClick={() => setModalShow8(true)}>
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/78995824/126479697-579adfeb-91a1-4e5c-98c7-13dcb2fd4803.JPG" alt="logo" />
                <Card.Body>
                  <Card.Title>New-York State Parks</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Leaflet, D3, Plotly(JS), ChartJS, HTML</Card.Subtitle>
                  <Card.Text>
                    Group project on New York State's State Park Attendance. Visualized the State Park data and deployed on Heroku.
                    <a href="https://newyork-newyork.herokuapp.com/" target="_blank">
                      Go to the site
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </OverlayTrigger>
            <NyModals show={modalShow8} onHide={() => setModalShow8(false)} />
          </Col>
        </Row>

        <Row>
          <Col>
            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to Learn More</Tooltip>}>
              <Card className="card" onClick={() => setModalShow9(true)}>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/D3_Manipulation-Data_Journalism/main/D3_data_journalism/snips/dj-static.png" alt="logo" />
                <Card.Body>
                  <Card.Title>Data Journalism</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">D3 </Card.Subtitle>
                  <Card.Text>Enable user interaction with the scatter plot by selecting the X and Y Axis Labels and the Scatter plot would change dynamically after fetching the appropriate data. </Card.Text>
                </Card.Body>
              </Card>
            </OverlayTrigger>
            <DJModals show={modalShow9} onHide={() => setModalShow9(false)} />
          </Col>
          <Col>
            <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to Learn More</Tooltip>}>
              <Card className="card" onClick={() => setModalShow10(true)}>
                <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/Leaflet-Earthquake_Analysis/main/snips/ea-static.png" alt="logo" />
                <Card.Body>
                  <Card.Title>Earthquake Analysis</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Leaflet, D3</Card.Subtitle>
                  <Card.Text>Read Earthquake data from UGSS in GeoJson format using D3 and added layers onto the map using Leaflet.</Card.Text>
                </Card.Body>
              </Card>
            </OverlayTrigger>
            <EAModals show={modalShow10} onHide={() => setModalShow10(false)} />
          </Col>

          <Col>
            {/* <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to Learn More</Tooltip>}>
            <Card className="card" onClick={() => setModalShow11(true)}>
              <Card.Img variant="top" src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
              <Card.Body>
                <Card.Title>Project</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tech Used in Project</Card.Subtitle>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
            </OverlayTrigger> */}
          </Col>
          <Col>
            {/* <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to Learn More</Tooltip>}>
            <Card className="card" onClick={() => setModalShow12(true)}>
              <Card.Img variant="top" src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
              <Card.Body>
                <Card.Title>Project</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tech Used in Project</Card.Subtitle>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
            {/* </OverlayTrigger> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
