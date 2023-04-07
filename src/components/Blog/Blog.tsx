import React from "react";
import {Link} from "react-router-dom";
import {Project} from "../../interfaces/Project";
import ImageList from '@mui/material/ImageList';
import {IconButton, ImageListItem, ImageListItemBar, Typography} from "@mui/material";

const Blog = ({projects}: { projects: Project[] }) => {
    return (
        <section id={"blog"}>
            <h1>Blog</h1>
            <Typography>Here are some of my Projects, feel free to explore</Typography>
            <ImageList variant="masonry" cols={3} gap={8}>
                {projects.map((project: Project) => (
                    <Link to={`/project/${project.id}`} key={project.id}>
                        <ImageListItem key={project.image} >
                            {/*TODO: image height of 400 is not applied*/}
                            <img src={`${project.image}`} alt={project.title} loading="lazy" height={400}/>
                            <ImageListItemBar
                                title={project.title}
                                subtitle={project.description}
                                actionIcon={
                                    <IconButton aria-label={`info about ${project.title}`}/>
                                }
                            />
                        </ImageListItem>
                    </Link>
                ))}
            </ImageList>
        </section>
    );
};

export default Blog;