import { Card, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import "./projects.css";

function Projects() {
  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col>
            <Card className="card">
              <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/cutecharts.gif" alt="logo" />
              <Card.Body>
                <Card.Title>Story Time with FX</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">CuteCharts, Python</Card.Subtitle>
                <Card.Text>Created visuals from Children Story books dataset from Kaggle. Used sklearn Random Forrest Classifier and Naive Bayes to predict the Stage those stories are for. </Card.Text>
                <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to GitHub</Tooltip>}>
                  <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/story_time_with_FX", "_blank")}>
                    Explore
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/po2.gif" alt="logo" />
              <Card.Body>
                <Card.Title>Obesity Rate - USA</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Power BI, Python</Card.Subtitle>
                <Card.Text>
                  Recreated <a href="https://github.com/foofx88/Project_Obesity">1st Group Project</a> which was completed with Python's pandas and matplotlib. This version's visualisation was realised by Microsoft's Power BI. The dataset was revisited and further explored.
                </Card.Text>
                <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to GitHub</Tooltip>}>
                  <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/ObesityRate-USA", "_blank")}>
                    Explore
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="card">
              <Card.Img variant="top" style={{height:"200px"}} src="https://raw.githubusercontent.com/foofx88/Tableau_CitiBike/main/snips/story.gif" alt="logo" />
              <Card.Body>
                <Card.Title>CitiBike</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tableau</Card.Subtitle>
                <Card.Text>Used Tableau to visualize 6 months of CitiBike usage data. Explored station's popularity, peak usage, maintenance requirements, and investigated on user's age.</Card.Text>
                <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to GitHub</Tooltip>}>
                  <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/Tableau_CitiBike", "_blank")}>
                    Explore
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/ETLproject.gif" alt="logo" />
              <Card.Body>
                <Card.Title>ETL - Financing Used Cars</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">SQL, Python</Card.Subtitle>
                <Card.Text>Extract, Load and Transformed Data from a local car dealership and finder.com.au. To Analyse between comparison loans provided by car dealer and financial institution. </Card.Text>
                <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to GitHub</Tooltip>}>
                  <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/ETL-Financing-Used-Cars", "_blank")}>
                    Explore
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="card">
              <Card.Img variant="top" src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
              <Card.Body>
                <Card.Title>Reaction on Elearning</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">REACT JS, AntD </Card.Subtitle>
                <Card.Text>Obtained E-learning data from Kaggle. Visualise student's reaction towards E-learning </Card.Text>
                <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to GitHub</Tooltip>}>
                  <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/reaction-on-elearning", "_blank")}>
                    Explore
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/plotly.gif" alt="logo" />
              <Card.Body>
                <Card.Title>Belly Button Biodiversity</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Plotly(JS), D3</Card.Subtitle>
                <Card.Text>Utilising Plotly to create interactive charts after reading json data with D3. The charts would change according to which Subject ID is chosen.</Card.Text>
                <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to GitHub</Tooltip>}>
                  <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/Plotly-JS-BellyButtonBiodiversity", "_blank")}>
                    Explore
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/p3.gif" alt="logo" />
              <Card.Body>
                <Card.Title>Perth City Properties</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Python, ML, SQlite, Tableau </Card.Subtitle>
                <Card.Text>
                  Collaboration with Helen for the final project on Data BootCamp. Used splinter to scrape data, pandas to clean and Tableau to visualised the data. Prepared the data for ML. We used Lasso Linear Regression model as it provided the ideal accuracy. 
                  <a href="https://cityofperthproperties.herokuapp.com/" target="_blank">
                     Go to the site
                  </a>
                </Card.Text>
                <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to GitHub</Tooltip>}>
                  <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/Perth-City-Properties", "_blank")}>
                    Explore
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/newyorknewyork.gif" alt="logo" />
              <Card.Body>
                <Card.Title>New-York State Parks</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Leaflet, D3, Plotly(JS), ChartJS, HTML</Card.Subtitle>
                <Card.Text>
                  Group project on New York State's State Park Attendance. Visualized the State Park data and deployed on Heroku.
                  <a href="https://newyork-newyork.herokuapp.com/" target="_blank">
                    Go to the site
                  </a>
                </Card.Text>
                <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to GitHub</Tooltip>}>
                  <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/New-York-State-Parks", "_blank")}>
                    Explore
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="card">
              <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/scatterplot.gif" alt="logo" />
              <Card.Body>
                <Card.Title>Data Journalism</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">D3 </Card.Subtitle>
                <Card.Text>Enable user interaction with the scatter plot by selecting the X and Y Axis Labels and the Scatter plot would change dynamically after fetching the appropriate data. </Card.Text>
                <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to GitHub</Tooltip>}>
                  <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/D3_Manipulation-Data_Journalism", "_blank")}>
                    Explore
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <Card.Img variant="top" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/main/images/leafletdemo.gif" alt="logo" />
              <Card.Body>
                <Card.Title>Earthquake Analysis</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Leaflet, D3</Card.Subtitle>
                <Card.Text>Read Earthquake data from UGSS in GeoJson format using D3 and added layers onto the map using Leaflet.</Card.Text>
                <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to GitHub</Tooltip>}>
                  <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/Leaflet-Earthquake_Analysis", "_blank")}>
                    Explore
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="card">
              <Card.Img variant="top" src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
              <Card.Body>
                <Card.Title>Project</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tech Used in Project</Card.Subtitle>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to GitHub</Tooltip>}>
                  <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://www.google.com", "_blank")}>
                    Explore
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <Card.Img variant="top" src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
              <Card.Body>
                <Card.Title>Project</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Tech Used in Project</Card.Subtitle>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Click to GitHub</Tooltip>}>
                  <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://www.google.com", "_blank")}>
                    Explore
                  </Button>
                </OverlayTrigger>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
