import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './styles/App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import MyJourney from "./components/MyJourney/MyJourney";
import {Project} from "./types/Project";

function App() {
    const [projects, setProjects] = useState<Project[]>([]);

    async function fetchProjects() {
        const response = await fetch("/projects.json");
        return await response.json();
    }

    useEffect(() => {
        fetchProjects().then(data => {
            setProjects(data);
        }).catch(error => {
            console.error("Error fetching projects:", error);
        });
    }, []);
    return (
        <div className="app">
            <Router>
                <div>
                    <Header/>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/about"} element={<About/>}/>
                        <Route path={"/my-journey"} element={<MyJourney/>}/>
                        <Route path={"/blog"} element={<Blog projects={projects}/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                    </Routes>
                </div>

            </Router>
        </div>
    );
}

export default App;
