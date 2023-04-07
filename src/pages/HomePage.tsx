import React from 'react';
import Home from "../components/Home/Home";
import About from "../components/About/About";
import MyJourney from "../components/MyJourney/MyJourney";
import Blog from "../components/Blog/Blog";
import {Project} from "../types/Project";
import Header from "../components/Header/Header";
import Contact from "../components/Contact/Contact";

const HomePage= ({ projects }: { projects: Project[] }) => {
    return (
        <div>
            <Header navData={"./Navigation/main.json"}/>
            <Home/>
            <About/>
            <MyJourney/>
            <Blog projects={projects}/>
            <Contact/>
        </div>
    );
}

export default HomePage;