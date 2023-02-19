import React from "react";
import { Link } from "react-router-dom";
import {Project} from "../../types/Project";


const Blog = ({ projects }: { projects: Project[] }) => {
    return (
        <section id={"blog"}>
            <div className="blog-grid">
                {projects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id}>
                        <div className="blog-item">
                            <img src={project.image} alt={project.title} />
                            <div className="blog-item-title">{project.title}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Blog;