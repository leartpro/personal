import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Project} from "./types/Project";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
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
        <div className="app" style={{marginLeft: '8px', marginRight: '8px'}}>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<HomePage projects={projects}/>}/>
                        <Route path="project/:id" element={<ProjectDetailsPage blogPosts={projects}/>} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
