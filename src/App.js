
import NaviBar from "./components/layout/NavigationBar";
import Projects from "./components/pages/Projects";


function App() {
  return  (
    <div>
    <NaviBar />
    <div className="content">
    <Projects/>
    </div>
    </div>
  );
}

export default App;
