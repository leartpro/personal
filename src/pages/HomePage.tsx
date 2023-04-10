import React, {useEffect, useState} from 'react';
import Home from "../components/Home/Home";
import About from "../components/About/About";
import MyJourney from "../components/MyJourney/MyJourney";
import Blog from "../components/Blog/Blog";
import {Project} from "../interfaces/Project";
import Header from "../components/Header/Header";
import Contact from "../components/Contact/Contact";
import {Navigation} from "../interfaces/Navigation";

const HomePage= ({ projects }: { projects: Project[] }) => {
    const [navigations, setNavigations] = useState<Navigation[]>([]);

    async function fetchNavigations() {
        const response = await fetch("./Navigation/main.json");
        return await response.json();
    }

    useEffect(() => {
        fetchNavigations().then(data => {
            setNavigations(data.navigations);
        }).catch(error => {
            console.error("Error fetching navigation:", error);
        });
    }, []);

    localStorage.clear();
    return (
        <div>
            <Header navigations={navigations}/>
            <Home/>
            <About/>
            <MyJourney/>
            <Blog projects={projects}/>
            <Contact navigations={navigations}/>
        </div>
    );
}

export default HomePage;