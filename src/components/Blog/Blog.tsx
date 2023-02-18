import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ projects }) => {
    return (
        <div className="blog">
            <div className="blog-grid">
                {projects.map((project) => (
                    <Link to={`/projects/${project.id}`} key={project.id}>
                        <div className="blog-item">
                            <img src={project.image} alt={project.title} />
                            <div className="blog-item-title">{project.title}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;