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
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import {Parallax} from "react-parallax";
import HomePage from "./pages/HomePage";

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
                        <Route path="/" element={<HomePage projects={projects}/>}/>
                        <Route path="/blog/:id" element={<ProjectDetailsPage blogPosts={projects}/>} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
