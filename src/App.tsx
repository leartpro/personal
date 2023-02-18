import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import ProjectDetails from "./components/Blog/ProjectDetails";
import Contact from "./components/Contact/Contact";

export async function getProjects() {
    const response = await fetch("path/to/projects.json");
    const data = await response.json();
    return data;
}


function App() {
    useEffect(() => {
        async function fetchProjects() {
            const data = await getProjects();
            setProjects(data);
        }
        fetchProjects();
    }, []);
  return (
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/my-journey" component={MyJourney} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:id" component={ProjectDetails} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
