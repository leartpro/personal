import React from 'react';
import {Parallax} from "react-parallax";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import MyJourney from "../components/MyJourney/MyJourney";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import {Project} from "../types/Project";

const HomePage= ({ projects }: { projects: Project[] }) => {
    return (
        <div>
            <Home/>
            <About/>
            <MyJourney/>
            <Blog projects={projects}/>
            <Contact/>
        </div>
    );
}

export default HomePage;