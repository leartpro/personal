import {useParams} from "react-router-dom";
import {Project} from "../types/Project";
import React from "react";
import {Fab, Typography} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';

const ProjectDetailsPage = (props: { blogPosts: Project[]; }) => {
    const {id} = useParams<{ id?: string }>();
    const parsedId = id ? +id : undefined;
    const post = props.blogPosts.find((post) => post.id === parsedId);
    const history = useNavigate();

    if (!post) {
        return <div>Blog post not found.</div>;
    }

    return (
            <section>
                <Fab aria-label={"back"} onClick={() => {history(-1)}}><ChevronLeftIcon/></Fab>
                <h2>{post.title}</h2>
                <h3>{post.description}</h3>
                <Typography>{post.content}</Typography>
            </section>
    );
}

export default ProjectDetailsPage;
