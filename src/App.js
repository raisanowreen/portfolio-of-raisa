import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import MyProjects from './Pages/MyProjects/MyProjects';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/blogs">
          <Blogs />
        </Route>
        <Route exact path="/projects/:projectId">
          <Projects />
        </Route>
        <Route exact path="/myProjects">
          <MyProjects />
        </Route>
        
      </Switch>
  </Router>
  );
}

export default App;
