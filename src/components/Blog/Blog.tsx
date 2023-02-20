import React from "react";
import {Link} from "react-router-dom";
import {Project} from "../../types/Project";
import ImageList from '@mui/material/ImageList';
import {IconButton, ImageListItem, ImageListItemBar, ListSubheader} from "@mui/material";

//TODO: only use @mui instead of @material-ui

const Blog = ({projects}: { projects: Project[] }) => {
    return (
        <section id={"blog"}>
            <h1>Blog</h1>
            <ImageList variant="masonry" cols={3} gap={8}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">Projects</ListSubheader>
                </ImageListItem>
                {projects.map((project: Project) => (
                    <Link to={`/project/${project.id}`} key={project.id}>
                        <ImageListItem key={project.image}>
                            <img src={`${project.image}`} alt={project.title} loading="lazy"/>
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