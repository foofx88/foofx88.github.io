import { Button, Modal } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export function StoryModals(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Story Time with FX</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/archived/images/cutecharts.gif" alt="logo" />
        <p>
          I came across the{" "}
          <a onClick={(event) => window.open("https://github.com/cutecharts/cutecharts.py", "_blank")}>
            <u>CuteChart</u>
          </a>{" "}
          library for Python. The library is based of Chart.xkcd which looks hand-drawn and cartoon-ish. 
          I was immediately drawn by the style of the charts and intrigued to use it.
          I went onto Kaggle and got a dataset for Children Story Books and started manipulating the data.
          </p><p>As most visual libraries require the dataset to be presented a certain way, 
          I had to curate the data according to the library specifications. 
          The charts are then plotted and exported as interactive HTML files.
          I also used the dataset to create a simple ML model to predict the Stage those Children stories are for.
        </p>
        You can explore and interact with the charts <a onClick={(event) => window.open("https://foofx88.github.io/story_time_with_FX/", "_blank")}>
            <u>here</u>
          </a>
      </Modal.Body>

      <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
        <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/story_time_with_FX", "_blank")}>
          Explore
        </Button>
      </OverlayTrigger>
    </Modal>
  );
}

export function ObesityModals(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Obesity Rate - USA</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/archived/images/po2.gif" alt="logo" />
        <p>I wanted to recreate the first project from the Data BootCamp to add more elements to the project. 
            The first project lacks interactivity and had more potential in the dataset. 
            Hence, I've revisited the dataset and used Power BI to create the visuals.
            I was able to project the ideas I had using Power BI with ease. </p>
      </Modal.Body>

      <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
        <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/ObesityRate-USA", "_blank")}>
          Explore
        </Button>
      </OverlayTrigger>
    </Modal>
  );
}

export function CitibikeModals(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">CitiBike - Tableau</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/Tableau_CitiBike/main/snips/story.gif" alt="logo" />
        <p>Tableau is amazing at Data Visualisation. There is so much customisations available and it was able to handle 6 months worth of data with ease.
        I had a great time exploring Tableau's capabilities and the CitiBike dataset. </p>
        You can explore and interact with the visuals <a onClick={(event) => window.open("https://public.tableau.com/app/profile/fangxuan.foo/viz/Citibike_16277367443490/CitiBikeStory", "_blank")}>
            <u>here</u>
          </a>
      </Modal.Body>
      <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
        <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/Tableau_CitiBike", "_blank")}>
          Explore
        </Button>
      </OverlayTrigger>
    </Modal>
  );
}

export function ETLModals(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">ETL - Financing Used Cars</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/archived/images/ETLproject.gif" alt="logo" />
        <p>For this project, I've teamed up with <a onClick={(event) => window.open("https://github.com/helenamin", "_blank")}>
            <u>Helen</u>
          </a> for the first time. 
          We've decided to perform a data scrape on a local car dealer and financial comparison website in order to find the 
          best car loan rates. We've then joined the data with pandas, cleaned, transform and load onto SQL.</p>
      </Modal.Body>
      <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
        <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/ETL-Financing-Used-Cars", "_blank")}>
          Explore
        </Button>
      </OverlayTrigger>
    </Modal>
  );
}

export function ROEModals(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Reaction on E-learning</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/reaction-on-elearning/main/static/roeDemo.gif" alt="logo" />
        <p>I've used REACT JS and charts and components from AntD. I've created multiple components and link them up with a Router.
            Beside the chart components, I've also created a data processing component that pulls the JSON file from S3 and passes the data to all the other child components.
     There are also components for navigation bar and the layout. </p>
     I've then deployed the site to{" "}
     <a onClick={(event) => window.open("https://foofx88.github.io/reaction-on-elearning/", "_blank")}>
         <u>github-pages</u>
          </a>.
      </Modal.Body>
      <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
        <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/reaction-on-elearning/tree/stashed", "_blank")}>
          Explore
        </Button>
      </OverlayTrigger>
    </Modal>
  );
}

export function B3Modals(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Belly Button Biodiversity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/archived/images/plotly.gif" alt="logo" />
        <p>Initial exploration with Plotly JS to create interactive charts. JSON file was the presented to onto the page with D3.
            The dashboard is made up of multiple Javascript functions that renders the Visualisation and the chart changes whenever a different Test Subject ID is selected. 
        </p>
        You can explore and interact with the charts <a onClick={(event) => window.open("https://foofx88.github.io/Plotly-JS-BellyButtonBiodiversity/", "_blank")}>
            <u>here</u>
          </a>
      </Modal.Body>
      <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
        <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/Plotly-JS-BellyButtonBiodiversity", "_blank")}>
          Explore
        </Button>
      </OverlayTrigger>
    </Modal>
  );
}

export function PcpModals(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Perth City Properties</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/archived/images/p3.gif" alt="logo" />
        <p>Collaborated with Helen for the final project on the Data BootCamp. We scraped real estate data and cross checked with another 2 sites for data integrity.
            The data was then cleaned, combined into a single dataframe and then loaded onto SQLite. A Flask was created for the front end and API fetch.
            I've contributed most on the page interface, several Tableau visuals and ensure data integrity as well as ML accuracy. This was an enjoyable project
            which we've presented more than 10 times during Demo Day.</p>
        You can explore and interact with the charts <a onClick={(event) => window.open("https://cityofperthproperties.herokuapp.com/", "_blank")}>
            <u>here</u>
          </a>
      </Modal.Body>
      <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
        <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/Perth-City-Properties", "_blank")}>
          Explore
        </Button>
      </OverlayTrigger>
    </Modal>
  );
}

export function NyModals(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New-York State Parks</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/archived/images/newyorknewyork.gif" alt="logo" />
        <p>2nd Group project for Data BootCamp. I've used Plotly JS, D3 and ChartJs for the data visualisation. 
            The GeoJSON data was visualised with Leaflet while ChartJS was used to visualise the yearly state parks attendance.</p>
            You can explore and interact with the charts <a onClick={(event) => window.open("https://newyork-newyork.herokuapp.com/", "_blank")}>
            <u>here</u>
          </a>
      </Modal.Body>
      <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
        <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/New-York-State-Parks", "_blank")}>
          Explore
        </Button>
      </OverlayTrigger>
    </Modal>
  );
}

export function DJModals(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Data Journalism</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/archived/images/scatterplot.gif" alt="logo" />
        <p>Initial exploration on D3. This project proved to be challenging as there are 3 selection on both X and Y axis.
            Not only the scatter plot will need to be updated when a different X or Y axis labels are selected, the Axis Labels will need to be updated as well.
            This was archievable by creating several functions for the render and multiple if else statements for the X and Y axis event listeners. </p>
            You can explore and interact with the charts <a onClick={(event) => window.open("https://foofx88.github.io/D3_Manipulation-Data_Journalism/", "_blank")}>
            <u>here</u>
          </a>
      </Modal.Body>
      <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
        <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/D3_Manipulation-Data_Journalism", "_blank")}>
          Explore
        </Button>
      </OverlayTrigger>
    </Modal>
  );
}
export function EAModals(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Earthquake Analysis</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="img-fluid mx-auto d-block" src="https://raw.githubusercontent.com/foofx88/foofx88.github.io/archived/images/leafletdemo.gif" alt="logo" />
        <p>First attempt with manipulating GeoJSON data obtained from USGS and plotting with Leaflet. 
            Upon exploring the GeoJSON data, I've identified the data I needed for the plot. I've used 2 Maps from MapBox and it was interesting to see the data once it was visualised on the map. </p>
      </Modal.Body>
      <OverlayTrigger key="bottom" placement="bottom" overlay={<Tooltip id={`tooltip-bottom`}>Go to GitHub</Tooltip>}>
        <Button variant="outline-primary" size="sm" className="button" onClick={(event) => window.open("https://github.com/foofx88/Leaflet-Earthquake_Analysis", "_blank")}>
          Explore
        </Button>
      </OverlayTrigger>
    </Modal>
  );
}
